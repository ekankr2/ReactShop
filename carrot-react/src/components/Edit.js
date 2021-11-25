import {useHistory, useParams} from "react-router-dom";
import {db} from "../index";
import {useDocumentData} from "react-firebase-hooks/firestore";
import {useRef} from "react";

function Edit(){
    let { id } = useParams()
    let history = useHistory()

    const titleRef = useRef()
    const priceRef = useRef()
    const contentRef = useRef()

    const query = db.collection('product').doc(id)
    const [product] = useDocumentData(query, {idField:'id'})



    const modify = (e) =>{
        e.preventDefault()

        let changeData = {
            title : titleRef.current.value,
            price : priceRef.current.value,
            content : contentRef.current.value
        }

        db.collection('product').doc(id).update(changeData).then(()=>{
            alert('수정 성공')
            history.goBack()
        })
    }

    if(product){
        return (
            <div className="container mt-3">
                <input type="text" className="form-control mt-2" defaultValue={product.title} ref={titleRef}/>
                <textarea className="form-control mt-2" defaultValue={product.content} ref={contentRef}/>
                <input type="text" className="form-control mt-2" defaultValue={product.price} ref={priceRef}/>
                <button className="btn btn-danger mt-3" onClick={modify}>수정하기</button>
            </div>
        )
    }
    return (
        <div>로딩중</div>
    )
}

export default Edit
