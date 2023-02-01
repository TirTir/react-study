import axios from "axios";

export interface PostLoginReq {
  email: string;
  password: string;
}

interface PostLoginRes {
  refreshToken: string;
  accessToken: string;
}

export function postLogin(data: PostLoginReq) {
  const res = axios.post<PostLoginRes>("https://test/api/v2/auth/login", data);
  return res;
}
