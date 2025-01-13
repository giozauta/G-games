import { login } from "@/supabase/auth";
import { useMutation } from "@tanstack/react-query";
import { LOG_IN_MUTATION_KEY } from "./enum";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: [LOG_IN_MUTATION_KEY.SIGN_IN],
    mutationFn: login,
    onSuccess: (res) => {
      if (res === false) {
        //need this code because, supabase cant handle when the user is not found
        alert("Sign-in failed please try again");
        return;
      }
      alert("Sign-in successful and redirecting to home page");
      navigate("/en/home");
    },
  });
};
