import './App.css';
import { Link, Route, Switch, useHistory } from 'react-router-dom'
import SignUp from "./components/SignUp";

import firebase from "firebase/compat";
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {useRef, useState} from "react";
import {auth, db} from "./index";
import Upload from "./components/Upload";
import SignIn from "./components/SignIn";
import {Divider} from "@mui/material";
import {IoChatbubblesOutline, IoMdHeartEmpty} from "react-icons/all";
import Detail from "./components/Detail";
import Edit from "./components/Edit";
import Chat from "./components/Chat";
import MyNavbar from "./components/main/AppBar";
import {Container} from "react-bootstrap";
import Products from "./components/main/Products";
import MenuButton from "./components/MenuButton";
import NavFooter from "./components/NavFooter";
import Chatroom from "./components/Chatroom";





function App() {

  const [user] = useAuthState(auth)
  console.log(user)

  return (
    <div className="App">
      <MyNavbar user={user} />
        <div className="Container">
            <Switch>

                <Route exact path="/">
                    <Products/>
                    <MenuButton/>
                </Route>

                <Route path="/login">
                    {user ? <SignOut/> : <SignIn/>}
                </Route>

                <Route path="/signUp">
                    <Container>
                        <SignUp/>
                    </Container>
                </Route>

                <Route path="/upload">
                    <Upload user={user}/>
                </Route>

                <Route path='/detail/:id'>
                    <Detail user={user}/>
                </Route>

                <Route path='/edit/:id'>
                    <Edit/>
                </Route>

                <Route path='/chat'>
                    <Chat user={user} />
                </Route>

                <Route path='/chatroom/:id'>
                    <Chatroom/>
                </Route>
            </Switch>
            <NavFooter/>
        </div>



    </div>
  );
}



function SignOut(){
    return auth.currentUser && (
        <button onClick={()=> auth.signOut()}>Sign Out</button>
    )
}


export default App;
