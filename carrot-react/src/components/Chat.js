import {auth, db} from '../index'
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useState} from "react";
import "./style/Chat.css"
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";

function Chat(){

    const [user] = useAuthState(auth)

    const chatroomRef = db.collection('chatroom')
    const query = chatroomRef.where('who', 'array-contains', user.uid)

    const [chatroom] = useCollectionData(query, {idField: 'id'})

    return (
        <>
            <div>채팅방</div>
            <div>
                { chatroom && chatroom.map((chatroom, index) =>
                    <ChatList chatroom={chatroom} index={index} key={index}/>) }
            </div>
        </>
    )
}

function ChatList(props){
    let history = useHistory()

    const seeChats = (e, id) => {
        history.push(`/chatroom/${id}`)
    }
    const chatComponent = () => {

    }

    return (
        <>
            <div className="chatList" onClick={(e)=>{seeChats(e, props.chatroom.id)}}>
                <div>{props.index}</div>
                <div>챗룸{props.chatroom.id}</div>
                <div>나{props.chatroom.who[0]}</div>
                <div>상대{props.chatroom.who[1]}</div>
            </div>
        </>
    )
}
export default Chat
