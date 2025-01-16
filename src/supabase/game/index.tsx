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

//თამაშების ინფორმაცია რომ განვაახლოთ 
export const updateBlogById = async ({id,gamesNewValues,image_file,old_image_url}:{id:number,gamesNewValues:GameNewDataType,image_file:File,old_image_url:string}):Promise<GameType | null|undefined> => {
  try {
    //იმისთვის რომ დავააფდეითოთ სუპაბეისში  სურათი
    const imageResult = await supabase.storage
      .from("game_images")
      .update(old_image_url, image_file);

    if (imageResult.error) {
      throw new Error(imageResult.error.message);
    }

    const gamesNewData = {
      ...gamesNewValues,
      image_url: imageResult.data?.path,
    };

    const { data, error } = await supabase
      .from("games")
      .update(gamesNewData)
      .eq("id", id)
      .single();

    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};