import { useHistory, useParams } from 'react-router-dom'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../index";
import {useDocumentData} from "react-firebase-hooks/firestore";

function Detail(){
    const [user] = useAuthState(auth)
    let { id } = useParams()

    const query = db.collection('product').doc(id)
    const [product] = useDocumentData(query, {idField:'id'})



    if(product){
        let timestamp = product.date.toDate().toString()
        let date = timestamp.slice(4,21)
        return(
            <div className="container">
                상세페이지임
                <div>
                    <h5 className="author">{product.name}</h5>
                    <hr/>
                        <h5 className="title">{product.title}</h5>
                        <p className="date">{date}</p>
                        <p className="price">{product.price}원</p>
                </div>
                <button id="edit">수정</button>
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
