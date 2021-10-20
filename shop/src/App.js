/* eslint-disable */
import React from "react";
import './App.css';
import { Navbar, Container, Nav, NavDropdown,Jumbotron,Button } from 'react-bootstrap';
import {useContext, useEffect, useState} from "react";
import data from './data'
import Detail from "./Detail";
import axios from "axios";
import { Link, Route, Switch } from 'react-router-dom'

export let 재고context = React.createContext();

function App() {

    let [shoes, shoes변경] = useState(data);
    let [재고, 재고변경] = useState([10,11,12]);

  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to='/detail'>Detail</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Switch>
        <Route exact path="/">
            <Jumbotron className="background py-3">
                <h1 className="display-3">20% Season Off</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style
                    component for calling extra attention to featured content or information.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>

            <div className="container">
                
                <재고context.Provider value={재고}>
                
                <div className="row">
                    {
                        shoes.map(function (a, i){
                            return (
                                <Card shoes={a} i={i}></Card>
                            )
                        })
                    }
                </div>

                </재고context.Provider>
                    
                    <button className='btn btn-primary' onClick={()=>{



                        axios.get('https://codingapple1.github.io/shop/data2.json')
                            .then((result)=>{
                                console.log(result.data)
                                shoes변경( [...shoes, ...result.data] )

                            })
                            .catch(()=>{
                                console.log('실패했어요')
                            })

                    }}>더보기</button>
                </div>
        </Route>

        <Route path="/detail/:id">

            <재고context.Provider value={재고}>
            <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}></Detail>
            </재고context.Provider>

        </Route>


        <Route path="/:id">
            <div>중복 출현</div>
        </Route>

        </Switch>




    </div>
  );
}

function Card(props){
    
    let 재고 = useContext(재고context);
    
    return(
        <div className="col-md-4">
            <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i+1) +'.jpg' } width="100%"/>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content} & {props.shoes.price}</p>
            <Test></Test>
            {재고}
            
        </div>
    )
}

function Test(){
    let 재고 = useContext(재고context)
    return <p>{재고}</p>
}

export default App;
