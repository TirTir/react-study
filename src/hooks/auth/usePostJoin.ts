import { useMutation } from "@tanstack/react-query";
import { postJoin } from "../../services/auth/postJoin";

export function usePostJoin() {
  return useMutation(["postJoin"], postJoin);
}
