import {Container, Navbar} from "react-bootstrap";
import {useHistory} from "react-router-dom";

export default function MyNavbar() {
    let history = useHistory()

    return(
        <Navbar bg="light">
            <Container>
                <Navbar.Brand onClick={()=>history.push('/')}>중고장터</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
