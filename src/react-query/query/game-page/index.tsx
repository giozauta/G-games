import { getCommentsByGameId } from "@/supabase/comments";
import { useQuery } from "@tanstack/react-query";
import { GAME_PAGE_QUERY_KEY } from "./enum";

export const useGetCommentsByGameId = (id: number) => {
  return useQuery({
    queryKey: [GAME_PAGE_QUERY_KEY.COMMENTS, id],
    queryFn: () => getCommentsByGameId(id),
    enabled: !!id,
  });
};
