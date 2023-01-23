import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react"

interface Form {
    email: string
    password: string
}

function Join(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const onPassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
    const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log('실행');
        event.preventDefault();
        join.mutate({ email, password }, {onError: () => {
            if(email === "")
                alert("이메일을 입력하세요");
            else
                alert("비밀번호를 입력하세요");
        }, onSuccess: () => {
            alert("회원가입 성공");
        }
        })
    }

    const join = useMutation(['Join'], (data: Form) => axios.post('https://test/api/v2/auth/join', data));
    return(
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
            <button onClick={onSubmit}>회원가입</button>
        </div>
    )
}

export default Join