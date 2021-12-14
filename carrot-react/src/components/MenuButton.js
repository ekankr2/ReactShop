import {Button, ButtonGroup, Modal} from "react-bootstrap";
import {useState} from "react";
import {useHistory} from "react-router-dom";


export default function MenuButton(){

    let history = useHistory()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Button variant="primary" onClick={handleShow} className="plusBtn">
                <span>+</span></Button>

            <Modal size="sm" show={show} onHide={handleClose} className="plusBtnModal">
                <ButtonGroup vertical>
                    <Button onClick={()=>{ history.push('/upload/') }} className="modalBtn">상품등록</Button>
                    <Button className="modalBtn">Button</Button>
                </ButtonGroup>
            </Modal>
        </>
    )

}
