import {Container, Navbar} from "react-bootstrap";
import {useHistory} from "react-router-dom";

export default function MyNavbar(props) {
    let history = useHistory()
    console.log(props.user)
    if(props.user){
        return(
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand className="navTitle" onClick={()=>history.push('/')}>중고장터</Navbar.Brand>
                    <span className="userName">{props.user.displayName}</span>
                </Container>
            </Navbar>
        )
    }
    return(
        <Navbar bg="light">
            <Container>
                <Navbar.Brand className="navTitle" onClick={()=>history.push('/')}>중고장터</Navbar.Brand>
            </Container>
        </Navbar>
    )

}
