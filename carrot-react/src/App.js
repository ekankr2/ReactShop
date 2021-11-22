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
import {Divider} from "@mui/material";
import {IoChatbubblesOutline, IoMdHeartEmpty} from "react-icons/all";
import Detail from "./components/Detail";





function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header>
          <Navbar bg="light"  variant="light">
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
                <Products/>
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
                <Detail/>
            </Route>
        </Switch>


    </div>
  );
}
function Products(){

    const productRef = db.collection('product')
    const query = productRef.orderBy('date')

    const [products] = useCollectionData(query, {idField: 'id'})

    return (
        <>
            <div>
                {products && products.map(product => <ProductCard key={product.id} product={product}/>)}
            </div>
        </>
    )
}

function ProductCard(props){
    const { title, content, image, name, price, uid, id} = props.product
    const timestamp = props.product.date.toDate()
    const date = String(timestamp).slice(4,21)
    let history = useHistory()

    const thumbnail={
        width: "100%",
        maxWidth: "180px",
        height: "180px",
        borderRadius: "10px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

    }

    return (
        <>
            <div className="col-md-4 product" onClick={()=>{ history.push('/detail/' + id) }}>
                <div className='thumbnail' style={thumbnail}></div>
                <div className="flex-grow-1 p-4">
                    <h5 className="title">{title}</h5>
                    <p className="date">{date}</p>
                    <p className="price">{price}원</p>
                    <p className="float-end chat"><IoMdHeartEmpty/>0</p>
                    <p className="float-end likes"><IoChatbubblesOutline/>0</p>
                </div>
            </div>
            <Divider variant="middle" />
        </>
    )
}


function SignOut(){
    return auth.currentUser && (
        <button onClick={()=> auth.signOut()}>Sign Out</button>
    )
}


export default App;
