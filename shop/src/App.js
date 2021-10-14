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
                <Item shoes={shoes}></Item>

                {/*<div className="col-md-4">*/}
                {/*    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>*/}
                {/*    <h4>{shoes[0].title}</h4>*/}
                {/*    <p>{shoes[0].content}</p>*/}
                {/*    <p>{shoes[0].price}</p>*/}
                {/*</div>*/}
                {/*<div className="col-md-4">*/}
                {/*    <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%"/>*/}
                {/*    <h4>{shoes[1].title}</h4>*/}
                {/*    <p>{shoes[1].content}</p>*/}
                {/*</div>*/}
                {/*<div className="col-md-4">*/}
                {/*    <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%"/>*/}
                {/*    <h4>{shoes[2].title}</h4>*/}
                {/*    <p>{shoes[2].content}</p>*/}
                {/*</div>*/}

            </div>
        </div>

    </div>
  );
}

function Item(props){
    return(
        <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
            <h4>{props.shoes[0].title}</h4>
            <p>{props.shoes[0].content}</p>
            <p>{props.shoes[0].price}</p>
        </div>
    )
}

export default App;
