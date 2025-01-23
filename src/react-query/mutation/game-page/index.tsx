import { addCommentsByGameId } from "@/supabase/comments";
import { useMutation } from "@tanstack/react-query";
import { GAME_PAGE_MUTATION_KEY } from "./enum";

export const useEddGameComment = () => {
  return useMutation({
    mutationKey: [GAME_PAGE_MUTATION_KEY.COMMENT],
    mutationFn: ({
      id,
      comment,
      user_email,
      user_id,
    }: {
      id: number;
      comment: string;
      user_email: string;
      user_id: string;
    }) => addCommentsByGameId({ id, comment, user_email, user_id }),
  });
};
