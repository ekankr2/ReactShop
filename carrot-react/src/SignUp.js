import {useRef, useState} from "react";
import {auth, db} from "./index";

function SignUp(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    const register = ()=>{
        let name = nameRef.current.value
        let email = emailRef.current.value
        let password = passwordRef.current.value

        let userData = {
            name : 'hello',
            email : 'joe',
        }

        db.collection('user').doc('hi').set(userData).then((res)=>{
            console.log('res: ' + res)
        }).catch((err)=>{
            console.log(err)
        })

        auth.createUserWithEmailAndPassword(email, password).then((res)=>{
            console.log(res.user.uid)

            let userData = {
                name : 'hello',
                email : 'joe',
            }

            db.collection('user').doc('hi').set(userData).then((res)=>{
                console.log('res: ' + res)
            }).catch((err)=>{
                console.log(err)
            })


            console.log(res.user)
            res.user.updateProfile( {displayName : name})
        })
    }

    const sendMessage = async(e) =>{
        e.preventDefault()


        await db.collection('user').add({
            text: 'hello',
            name: 'john'
        })

    }

    return (
        <div className="container mt-3">
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="name" ref={nameRef}/>
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" placeholder="email" ref={emailRef}/>
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" placeholder="pw" ref={passwordRef}/>
            </div>
            <button type="submit" className="btn btn-primary" id="register" onClick={sendMessage}>가입하기</button>
        </div>
    )
}

export default SignUp
