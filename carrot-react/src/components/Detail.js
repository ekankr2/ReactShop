import { useHistory, useParams } from 'react-router-dom'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../index";
import {useDocumentData} from "react-firebase-hooks/firestore";
import './style/Detail.css'
import {BsArrowLeft} from "react-icons/all";

function Detail(){
    let { id } = useParams()
    let history = useHistory()

    const query = db.collection('product').doc(id)
    const [product] = useDocumentData(query, {idField:'id'})

    const deleteDoc = () => {
        db.collection('product').doc(id).delete().then(()=>{
            alert('삭제성공')
            history.push('/')
        }).catch((err)=>{
            console.log(err)
        })
    }

    if(product){
        let timestamp = product.date.toDate().toString()
        let date = timestamp.slice(4,21)

        const pic={
            width: "100%",
            height: "300px",
            backgroundImage: `url(${product.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",

        }

        return(
            <div className="container">
                <BsArrowLeft onClick={()=>{history.goBack()}} size="28" cursor="pointer"/>
                <div>
                    <div className="detail-pic my-4" style={pic}/>
                    <h5 className="author">{product.name}</h5>
                    <hr/>
                        <h5 className="title">{product.title}</h5>
                        <p className="date">{date}</p>
                        <p className="content">{product.content}</p>
                        <p className="price">{product.price}원</p>
                </div>
                <button id="edit" onClick={()=>{history.push('/edit/' + id)}}>수정</button>
                <button id="edit" onClick={deleteDoc}>삭제</button>
                <button id="chat">채팅</button>

            </div>
        )

    }else{
        return(
            <>
                <div>로딩중...</div>
            </>
        )
    }

}
export default Detail
