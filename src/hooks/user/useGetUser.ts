import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/user/getUser";

export function useGetUser() {
  return useQuery(["getUser"], getUser);
}
