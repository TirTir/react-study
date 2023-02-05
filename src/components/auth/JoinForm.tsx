import { useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router";
import { usePostJoin } from "../../hooks/auth";
import * as S from "./JoinForm.styled";

export function JoinForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onEmail = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const onPassword = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const navigate = useNavigate();
  const join = usePostJoin();

  const onSubmit = () => {
    join.mutate(
      { email, password },
      {
        onError: () => {
          if (email === "") alert("이메일을 입력하세요");
          else alert("비밀번호를 입력하세요");
        },
        onSuccess: () => {
          alert("회원가입 성공");
          navigate("/login");
        },
      }
    );
  };

  return (
    <div css={S.formLayout}>
      <input
        style={{ width: "60%" }}
        onChange={onEmail}
        value={email}
        type="text"
        placeholder="이메일 주소"
      />
      <input
        style={{ width: "60%" }}
        onChange={onPassword}
        value={password}
        type="text"
        placeholder="비밀번호"
      />

      <Button
        css={S.buttonStyle}
        type="primary"
        block={true}
        onClick={onSubmit}
      >
        가입
      </Button>
    </div>
  );
}
