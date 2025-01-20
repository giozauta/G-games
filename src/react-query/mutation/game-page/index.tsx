import { addCommentsByGameId } from "@/supabase/comments";
import { useMutation } from "@tanstack/react-query";
import { GAME_PAGE_MUTATION_KEY } from "./enum";

export const useEddGameComment = () => {
  return useMutation({
    mutationKey: [GAME_PAGE_MUTATION_KEY.COMMENT],
    mutationFn: ({ id, comment }: { id: number; comment: string }) =>
      addCommentsByGameId({ id, comment }),
  });
};
