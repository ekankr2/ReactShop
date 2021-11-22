import { useHistory, useParams } from 'react-router-dom'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../index";
import {useDocumentData} from "react-firebase-hooks/firestore";

function Detail(){
    const [user] = useAuthState(auth)
    let { id } = useParams()

    const query = db.collection('product').doc(id)
    const [product] = useDocumentData(query, {idField:'id'})
    console.log(product)
    return(
        <>
        </>
    )
}
export default Detail
