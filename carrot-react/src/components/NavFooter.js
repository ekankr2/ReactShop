import {Nav} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {useState} from "react";

export default function NavFooter(){
    let history = useHistory()

    const [active, setActive] = useState('default');
    return (
        <div className="footerContainer">
            <Nav fill variant="tabs"
                className="footerMenu"
                activeKey={active}
                onSelect={(selectedKey) => setActive(selectedKey)}
            >
                <Nav.Item>
                    <Nav.Link eventKey="default" onClick={()=>history.push('/')}>홈</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={()=>history.push('/upload')}>등록</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={()=>history.push('/chat/')}>채팅</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" onClick={()=>history.push('/chat')}>마이</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}
