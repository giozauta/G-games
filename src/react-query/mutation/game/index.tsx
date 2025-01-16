import { updateGameById, updateLikes } from "@/supabase/game";
import { HOME_MUTATION_KEYS } from "./enum";
import { useMutation } from "@tanstack/react-query";
import { GameNewInfoType } from "./types";

export const useLikesUpdate = () => {
  return useMutation({
    mutationKey: [HOME_MUTATION_KEYS.LIKES],
    mutationFn: (gameId: number) => updateLikes(gameId),
  });
};

export const useUpdateGame = () => {
  return useMutation({
    mutationKey: [HOME_MUTATION_KEYS.GAMES],
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
