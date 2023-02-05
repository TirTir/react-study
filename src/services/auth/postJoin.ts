import axios from "axios";

interface PostJoinReq {
  email: string;
  password: string;
}
interface PostJoinRes {
  refreshToken: string;
  accessToken: string;
}
export function postJoin(data: PostJoinReq) {
  return axios.post<PostJoinRes>("https://test/api/v2/auth/join", data);
}
