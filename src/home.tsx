import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem("token"))
            navigate("/login");
    }, [])

    return(
        <div>
            안녕
        </div>
    )
}
export default Home;