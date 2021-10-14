import './App.css';
import { Navbar, Container, Nav, NavDropdown,Jumbotron,Button } from 'react-bootstrap';
import {useState} from "react";

import data from './data'

function App() {

    let [shoes, shoes변경] = useState(data);

  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
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

        <Jumbotron className="background py-3">
            <h1 className="display-3">20% Season Off</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style
                component for calling extra attention to featured content or information.</p>
            <p className="lead">
                <Button color="primary">Learn More</Button>
            </p>
        </Jumbotron>

        <div className="container">
            <div className="row">
                {
                    shoes.map(function (a, i){
                        return (
                            <Item shoes={shoes} i={i}></Item>
                        )
                    })
                }
            </div>
        </div>

    </div>
  );
}

function Item(props){
    return(
        <div className="col-md-4">
            <img src={props.shoes[props.i].src} width="100%"/>
            <h4>{props.shoes[props.i].title}</h4>
            <p>{props.shoes[props.i].content}</p>
            <p>{props.shoes[props.i].price}</p>
        </div>
    )
}

export default App;
