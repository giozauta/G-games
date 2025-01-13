import { useMutation } from "@tanstack/react-query";
import { LOG_OUT_MUTATION_KEY } from "./enum";
import { logout } from "@/supabase/auth";

export const useLogOut = () => {
  return useMutation({
    mutationKey: [LOG_OUT_MUTATION_KEY],
    mutationFn: logout,
  });
};
