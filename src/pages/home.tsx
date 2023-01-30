import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Button, Space } from 'antd';

function Home() {
    interface User{
        email: string
        id: string
        profileImage: string
        type: number
    }

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem("token"))
            navigate("/login");
    }, [])

    const getUser = async() =>{
        console.log('서버');
        const datalist = await axios.get<User>('https://test/api/v1/users/me', {
            headers:{ authorization: `Bearer ${localStorage.getItem("token")}`}
        });
        console.log("datalist :  !!!!!!!!! :", datalist);
        // const datalist = {data: , config, header}
        // AxiosResponse => { data: 서버에서 내려준값 , config1:123, header : 213123}
        return datalist;
    }
    
    const { data } = useQuery(['user'], getUser);

    return(
        <>
        <div style={{height: "100%"}}>
            <header style={{backgroundColor: 'black'}}>
                <h1 style={{color: 'white'}}>{data?.data.email}, Hello!</h1>
            </header>
        </div>
            <div>
                <Space direction="vertical">
                        <Button block onClick={logout}>로그아웃</Button>
                </Space>
            </div>
        </>
    )
}

export default Home;