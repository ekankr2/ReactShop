import {useRef, useState} from "react";
import {auth, db} from "./index";

function SignUp(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    const register = (e)=>{
        e.preventDefault()

        let name = nameRef.current.value
        let email = emailRef.current.value
        let password = passwordRef.current.value

        auth.createUserWithEmailAndPassword(email, password).then((res)=>{

            let userInfo = {
                name : name,
                email : email
            }

            db.collection('user').doc(res.user.uid).set(userInfo).then(()=>{
                console.log('등록 성공')
                nameRef.current.value = ''
                emailRef.current.value = ''
                passwordRef.current.value = ''

            }).catch((err)=>{
                console.log(err)
            })

            console.log(res.user)
            res.user.updateProfile( {displayName : name} )
        })
    }

    return (
        <div className="container mt-3">
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="이름" ref={nameRef}/>
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="이메일" ref={emailRef}/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="비밀번호" ref={passwordRef}/>
                </div>
                <button className="btn btn-primary" id="register" onClick={register}>가입하기</button>
        </div>
    )
}

export default SignUp
