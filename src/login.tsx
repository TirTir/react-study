import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const onPassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

    const navigate = useNavigate();
    const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        navigate('/home');
    }
    return (
        <div style={{display: 'flex', alignItems:'center',flexDirection: 'column', paddingTop: '40px', height: "100%", width: "100%"}}>
            <div style={{display: 'flex', alignItems:'center', flexDirection: 'column', border: 'solid 1px black', padding: '20px',height: "100%", width: "60%"}}>
                <h1>XAM!</h1>
                <div style={{display: 'flex', alignItems:'center', flexDirection: 'column'}}>
                    <input
                        onChange={onEmail}
                        value = {email}
                        type = "text"
                        placeholder= "이메일"

                    />
                    <input
                        onChange={onPassword}
                        value = {password}
                        type = "text"
                        placeholder= "비밀번호"

                    />
                    <br/>
                    <button style={{backgroundColor: 'blueviolet', color: 'white'}} onClick={onSubmit}>로그인</button>
                </div>
            </div>
            <h3 style={{color:"gray"}}>--------- 또는 ---------</h3>
            <div style={{display: 'flex', alignItems: 'center',border: 'solid 1px black', height: "50%"}}>
                <p>계정이 없으신가요?</p>
                <Link style={{color: 'blue'}} to={"/join"}>가입하기</Link>
            </div>
        </div>
    )
}
export default Login;