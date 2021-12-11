import {Container, Navbar} from "react-bootstrap";

export default function MyNavbar() {
    return(
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="#home">Brand link</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
