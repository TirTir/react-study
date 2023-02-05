import axios from "axios";

interface GetUserReq {
  email: string;
  id: string;
  profileImage: string;
  type: number;
}

export function getUser() {
  const res = axios.get<GetUserReq>("https://test/api/v1/users/me", {
    headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return res;
}
