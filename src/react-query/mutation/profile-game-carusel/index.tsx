import { useMutation } from "@tanstack/react-query";
import { PROFILE_GAME_CARUSEL_MUTATION_KEY } from "./enum";
import { GameNewInfoType } from "./type";
import { updateGameById,deleteGamesById } from "@/supabase/game";

export const useDeleteGame = () => {
  return useMutation({
    mutationKey: [PROFILE_GAME_CARUSEL_MUTATION_KEY.DELETE_GAME],
    mutationFn: deleteGamesById,
  });
};



export const useUpdateGame = () => {
  return useMutation({
    mutationKey: [PROFILE_GAME_CARUSEL_MUTATION_KEY.UPDATE_GAME],
    mutationFn: ({
      id,
      data,
      image_file,
      old_image_url,
    }: {
      id: number;
      data: GameNewInfoType;
      image_file: File;
      old_image_url: string;
    }) => updateGameById(id, data, image_file, old_image_url),
  });
};
