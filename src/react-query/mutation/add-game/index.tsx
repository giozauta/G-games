import { useMutation } from "@tanstack/react-query";
import { ADD_GAME_WRITE_MUTATION_KEY } from "./enum";
import { uploadGameWithImage } from "@/supabase/add-game";

export const useUpdateBlog = () => {
  return useMutation({
    mutationKey: [ADD_GAME_WRITE_MUTATION_KEY.UPLOAD_GAME],
    mutationFn: uploadGameWithImage,
  });
};
