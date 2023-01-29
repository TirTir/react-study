import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react"

import { Button } from 'antd';
import { useNavigate } from "react-router";

interface Form {
    email: string
    password: string
}

function Join(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const onPassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
    const navigate = useNavigate();
    const onSubmit = () => {
        join.mutate({ email, password }, {onError: () => {
            if(email === "")
                alert("이메일을 입력하세요");
            else
                alert("비밀번호를 입력하세요");
        }, onSuccess: () => {
            alert("회원가입 성공");
            navigate("/login");
        }
        })
    }

    const join = useMutation(['Join'], (data: Form) => axios.post('https://test/api/v2/auth/join', data));
    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
            <div>
                <h1 style={{alignContent: 'center'}}>XAM!</h1>
                <h3 style={{display: 'flex', color: 'gray'}}>친구들의 사진과 동영상을 보려면 가입하세요.</h3>
            </div>
            <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                <input style={{width: '60%'}}
                    onChange={onEmail}
                    value = {email}
                    type = "text"
                    placeholder= "이메일 주소"
                />
                <input style={{width: '60%'}}
                    onChange={onPassword}
                    value = {password}
                    type = "text"
                    placeholder= "비밀번호"
                />

                <Button style={{backgroundColor: 'blueviolet', color: 'white', width: "61%"}} type="primary" block={true} onClick={onSubmit}>가입</Button>
            </div>
        </div>
    )
}

export default Join