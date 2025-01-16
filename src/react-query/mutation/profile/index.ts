import { useMutation } from "@tanstack/react-query";
import { PROFILE_MUTATION_KEY } from "./enum";
import { updateUserById } from "@/supabase/profile";
import { NewProfileValuesType } from "./types";

export const useEditProfile = () => {
  return useMutation({
    mutationKey: [PROFILE_MUTATION_KEY.EDIT_PROFILE],
    mutationFn: ({
      userId,
      updates,
    }: {
      userId: string;
      updates: NewProfileValuesType;
    }) => updateUserById({ userId, updates }),
  });
};
