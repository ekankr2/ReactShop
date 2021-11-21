import './App.css';
import { Link, Route, Switch, useHistory } from 'react-router-dom'
import SignUp from "./components/SignUp";

import firebase from "firebase/compat";
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {Container, Nav, Navbar} from "react-bootstrap";
import {useRef, useState} from "react";
import {auth, db} from "./index";
import Upload from "./components/Upload";
import SignIn from "./components/SignIn";





function App() {

  const [user] = useAuthState(auth)
    console.log(user)

  return (
    <div className="App">
      <header>
          <Navbar bg="light" variant="light">
              <Container>
                  <Navbar.Brand as={Link} to='/'>Carrot</Navbar.Brand>
                  <Nav className="me-auto">
                      <Nav.Link as={Link} to='/'>Home</Nav.Link>
                      {user ? '' : <Nav.Link as={Link} to='/login'>Login</Nav.Link> }
                      {user ? '' : <Nav.Link as={Link} to='/signUp'>Sign Up</Nav.Link>}
                      {user ? <Nav.Link as={Link} to='/upload'>Upload</Nav.Link> : ''}
                      {user ? <Nav.Link onClick={()=> auth.signOut()}>로그아웃</Nav.Link> : ''}
                  </Nav>
              </Container>
          </Navbar>
      </header>

        <Switch>

            <Route exact path="/">
                <div>메인페이지에요</div>
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
        </Switch>


    </div>
  );
}


function SignOut(){
    return auth.currentUser && (
        <button onClick={()=> auth.signOut()}>Sign Out</button>
    )
}


export default App;
