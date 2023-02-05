import { useMutation } from "@tanstack/react-query";
import { postLogin } from "../../services/auth/postLogin";

export function usePostLogin() {
  return useMutation(["postLogin"], postLogin);
}
