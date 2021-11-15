import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import SignUp from "./SignUp";

import firebase from "firebase/compat";
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {Container, Nav, Navbar} from "react-bootstrap";
import {useState} from "react";
import {auth, db} from "./index";





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
                      <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                      <Nav.Link as={Link} to='/signUp'>Sign Up</Nav.Link>
                      <Nav.Link href="#pricing">Pricing</Nav.Link>
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
                    <SignUp db={db} auth={auth}/>
                </Container>
            </Route>
        </Switch>


    </div>
  );
}

function SignIn(){
    const signInWithGoogle = ()=>{
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return(
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
}
function SignOut(){
    return auth.currentUser && (
        <button onClick={()=> auth.signOut()}>Sign Out</button>
    )
}


export default App;
