import React, { useState } from 'react';
import { Link, useNavigate  } from "react-router-dom";

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
        <div>
        <div>
            <h1>XAM!</h1>
        </div>
        <div>
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
            <button onClick={onSubmit}>로그인</button>
        </div>
        <div>
            <h3>--------- 또는 ---------</h3>
            <h3>
                계정이 없으신가요?
            </h3>
            <Link to={"/join"}>가입하기</Link>
        </div>
    </div>
    )
}
export default Login;