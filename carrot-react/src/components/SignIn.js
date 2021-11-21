import {useHistory} from "react-router-dom";
import {useRef} from "react";
import firebase from "firebase/compat";
import {auth} from "../index";

function SignIn(){
    let history = useHistory()
    const emailRef = useRef()
    const passwordRef = useRef()

    const signInWithGoogle = ()=>{
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    const login = ()=>{
        let email = emailRef.current.value
        let password = passwordRef.current.value

        auth.signInWithEmailAndPassword(email, password).then((res)=>{
            history.goBack()
        })
    }

    return(
        <>
            <div className="container mt-3">
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="이메일" ref={emailRef}/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="비밀번호" ref={passwordRef}/>
                </div>
                <button className="btn btn-primary" id="register" onClick={login}>로그인</button>
            </div>

            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </>
    )
}
export default SignIn
