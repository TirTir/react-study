import { JoinForm } from "../../components/auth";
import * as S from "./Join.styled";

export function Join() {
  return (
    <div css={S.joinLayout}>
      <div>
        <h1 style={{ alignContent: "center" }}>XAM!</h1>
        <h3 style={{ display: "flex", color: "gray" }}>
          친구들의 사진과 동영상을 보려면 가입하세요.
        </h3>
      </div>
      <JoinForm />
    </div>
  );
}
