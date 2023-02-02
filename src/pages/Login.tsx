import { Link } from "react-router-dom";
import { LoginForm } from "../components/auth";

export function Login() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "40px",
        height: "100%",
        width: "100%",
      }}
    >
      <LoginForm />
      <h3 style={{ color: "gray" }}>--------- 또는 ---------</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "solid 1px black",
          width: "63%",
          height: "50%",
        }}
      >
        <p>계정이 없으신가요?</p>
        <Link style={{ color: "blue", paddingBottom: "20px" }} to={"/join"}>
          가입하기
        </Link>
      </div>
    </div>
  );
}
