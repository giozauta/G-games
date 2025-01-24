import { useMutation } from "@tanstack/react-query";
import { PROFILE_MUTATION_KEY } from "./enum";
import { updateUserById } from "@/supabase/profile";
import { NewProfileValuesType } from "./types";
import { deleteCommentById } from "@/supabase/comments";

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


export const useDeleteComment = () =>{
  return useMutation({
    mutationKey: [PROFILE_MUTATION_KEY.DELETE_COMMENT],
    mutationFn: (comment_id:number) =>deleteCommentById(comment_id)
  })
}