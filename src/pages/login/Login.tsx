/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/auth";
import * as S from "./Login.styled";

export function Login() {
  return (
    <div css={S.loginLayout}>
      <LoginForm />
      <h3 style={{ color: "gray" }}>--------- 또는 ---------</h3>
      <div css={S.loginStyle}>
        <p>계정이 없으신가요?</p>
        <Link style={{ color: "blue", paddingBottom: "20px" }} to={"/join"}>
          가입하기
        </Link>
      </div>
    </div>
  );
}
