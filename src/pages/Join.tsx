import { JoinForm } from "../components/auth";

export function Join() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
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
