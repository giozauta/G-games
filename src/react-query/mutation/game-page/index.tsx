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
      game_name_en,
      game_name_ka,
      image_url,
    }: {
      id: number;
      comment: string;
      user_email: string;
      user_id: string;
      game_name_en: string;
      game_name_ka: string;
      image_url: string;
    }) =>
      addCommentsByGameId({
        id,
        comment,
        user_email,
        user_id,
        game_name_en,
        game_name_ka,
        image_url,
      }),
  });
};
