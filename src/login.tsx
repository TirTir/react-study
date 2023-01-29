import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { Button, Space } from 'antd';

interface Form {
    email: string,
    password: string
}

interface Token {
    refreshToken: string,
	accessToken: string
}

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const onPassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
    const navigate = useNavigate();

    const onSubmit = () => {

        const data: Form = {
            email: email,
            password: password
        }
        
        login.mutate(data, { onError: () => {
            alert('로그인에 실패하였습니다.');
          },onSuccess: (res) => {
            localStorage.setItem("token", res.data.accessToken)
            alert('환영합니다!');
            navigate("/home");
            }
        });
    }

   const login = useMutation(['Login'], (data: Form) => axios.post<Token>('https://test/api/v2/auth/login', data));

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
                </div>
                <br/>
                <Space direction="vertical">
                        <Button type="primary" block onClick={onSubmit}>로그인</Button>
                </Space>
            </div>
            <h3 style={{color:"gray"}}>--------- 또는 ---------</h3>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',border: 'solid 1px black', width: "63%", height: "50%"}}>
                <p>계정이 없으신가요?</p>
                <Link style={{color: 'blue', paddingBottom: '20px'}} to={"/join"}>가입하기</Link>
            </div>
        </div>
    )
}
export default Login;