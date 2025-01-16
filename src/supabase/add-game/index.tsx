import supabase from "..";
import { AddGameType } from "./types";

export const uploadGameWithImage = async ({
  fileName,
  file,
  newGameValues,
}: {
  fileName: string;
  file: File;
  newGameValues: AddGameType;
}) => {
  try {
    const imageResult = await supabase.storage
      .from("game_images")
      .upload(fileName, file);

    if (imageResult.error) {
      throw new Error(imageResult.error.message);
    }

    const imagePath = imageResult.data?.path;

    if (!imagePath) {
      throw new Error("Image upload failed: Path is undefined.");
    }

    const gamesData = {
      ...newGameValues,
      image_url: imagePath,
    };
    const gamesResult = await supabase.from("games").insert(gamesData);

    if (gamesResult.error) {
      throw new Error(gamesResult.error.message);
    }

    return gamesResult.data;
  } catch (error) {
    console.error("Error uploading game with image:", error);
    return error;
  }
};
