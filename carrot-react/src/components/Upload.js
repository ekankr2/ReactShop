import React, {useRef, useState} from "react";
import {Button, Card, Container, Form} from "react-bootstrap";
import {GrClose} from "react-icons/all";
import './style/Upload.css';
import {useHistory} from "react-router-dom";
import {db, storage} from "../index";
import firebase from "firebase/compat";

function Upload(props){

    let history = useHistory()

    const titleRef = useRef()
    const priceRef = useRef()
    const contentRef = useRef()
    const imageRef = useRef()

    const [imageFile, setImageFile] = useState('')

    const register = (e) =>{
        e.preventDefault()

        let file = imageFile
        let storageRef = storage.ref()
        let uploadPath = storageRef.child('image/' + file.name)
        let upload = uploadPath.put(file)

        let title = titleRef.current.value
        let price = priceRef.current.value
        let content = contentRef.current.value

        upload.on('state_changed',
            null,
            (error)=>{
            console.log('실패사유는', error)
            },
            () =>{
            upload.snapshot.ref.getDownloadURL().then((url)=>{
                console.log('업로드된 경로는', url)

                let itemInfo = {
                    title : title,
                    price : parseInt(price),
                    content : content,
                    // date : firebase.firestore.FieldValue.serverTimestamp(),
                    date : new Date(),
                    image : url,
                    uid : props.user.uid,
                    name : props.user.displayName,
                }
                db.collection('product').add(itemInfo).then((result)=>{
                    console.log(result)
                    alert('등록 성공')
                    history.push('/')
                }).catch((err)=>{
                    console.log(err)
                    alert('등록 실패')
                })
            })
            })


    }

    return (
        <Container>
            <Card className='uploadCard'>
                <Card.Header className='uploadHeader'>중고거래 글쓰기
                    <span className='close' onClick={()=>{history.goBack()}}><GrClose/></span>
                    <span className='complete' onClick={register}>완료</span>
                </Card.Header>
                <Form className='uploadForm'>
                    <Form.Group controlId="formFile" className="mb-3"
                    onChange={(e)=>setImageFile(e.target.files[0])}>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control size='lg' type="text" placeholder="글 제목" ref={titleRef}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control size='lg' type="text" placeholder="가격" ref={priceRef}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" placeholder='게시글 내용' rows={10} ref={contentRef}/>
                    </Form.Group>
                </Form>
            </Card>
        </Container>
    )
}
export default Upload

