import { login } from "@/supabase/auth";
import { useMutation } from "@tanstack/react-query";
import { LOG_IN_MUTATION_KEY } from "./enum";

export const useSignIn = () => {
  return useMutation({
    mutationKey: [LOG_IN_MUTATION_KEY.SIGN_IN],
    mutationFn: login,
  });
};
