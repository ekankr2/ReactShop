import {useParams} from "react-router-dom";
import {Button} from "react-bootstrap";


export default function Chatroom(){
    let { id } = useParams()
    console.log("uid : ", id)

    return (
        <>
            <input/>
            <Button>전송</Button>
        </>
    )
}
