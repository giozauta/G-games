import supabase from "..";
import { GameNewDataType, GameType } from "./types";

export const getGamesById = async (
  gameId: number | undefined,
): Promise<GameType | null> => {
  try {
    const { data, error } = await supabase
      .from("games")
      .select("*")
      .eq("id", gameId as number)
      .single();

    if (error) {
      throw new Error(error.message);
    }
    console.log(data);
    return data;
  } catch (err) {
    console.error("Error fetching game by ID:", err);
    throw new Error("Failed to fetch game. Please try again later.");
  }
};

export const updateLikes = async (gameId: number): Promise<number | null> => {
  try {
    const { data: game, error: fetchError } = await supabase
      .from("games")
      .select("likes")
      .eq("id", gameId)
      .single();
    if (fetchError) {
      console.error("Error fetching game:", fetchError);
      return null;
    }
    const currentLikes = game.likes ?? 0;
    const { data, error: updateError } = await supabase
      .from("games")
      .update({ likes: currentLikes + 1 })
      .eq("id", gameId);
    if (updateError) {
      console.error("Error updating likes:", updateError);
      return null;
    }
    console.log("Updated game:", data);
    return data;
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
};

export const updateGameById = async (
  id: number,
  newGameValues: GameNewDataType,
  image_file: File,
  old_image_url: string,
) => {
  try {
    // Update the image in Supabase storage
    const imageResult = await supabase.storage
      .from("game_images")
      .update(old_image_url, image_file);

    if (imageResult.error) {
      throw new Error(imageResult.error.message);
    }

    // Append a cache-busting query parameter to the image URL
    const updatedImageUrl = `${imageResult.data?.path}?timestamp=${Date.now()}`;

    const gamesNewData = {
      ...newGameValues,
      image_url: updatedImageUrl,
    };

    // Update the game data in the database
    const { data, error } = await supabase
      .from("games")
      .update(gamesNewData)
      .eq("id", id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
