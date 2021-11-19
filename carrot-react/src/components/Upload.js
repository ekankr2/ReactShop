import React from "react";
import {Button, Card, Container, Form} from "react-bootstrap";
import {GrClose} from "react-icons/all";
import {useHistory} from "react-router-dom";
function Upload(){
    let history = useHistory()

    return (
        <Container>
            <Card className='uploadCard'>
                <Card.Header className='uploadHeader'>중고거래 글쓰기
                    <span className='close' onClick={()=>{history.goBack()}}><GrClose/></span>
                    <span className='complete'>완료</span>
                </Card.Header>
                <Form className='uploadForm'>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control size='lg' type="text" placeholder="글 제목" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control size='lg' type="text" placeholder="가격" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" placeholder='게시글 내용' rows={10} />
                    </Form.Group>
                </Form>
            </Card>
        </Container>
    )
}
export default Upload

