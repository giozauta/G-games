import { register } from "@/supabase/sign-up";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AUTH_MUTATION_KEYS } from "./enum";

export const useSignUp = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: [AUTH_MUTATION_KEYS.SIGN_UP],
    mutationFn: register,
    onSuccess: () => {
      alert("Sign-up successful and redirecting to sign-in page");
      navigate("/sign-in");
    },
  });
};
