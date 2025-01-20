import supabase from "..";
import { GameNewDataType, GameType } from "./types";

//for home page
export const getGamesWithSearch = async (
  search?: string | number | null,
): Promise<GameType[]> => {
  try {
    let query = supabase.from("games").select("*");

    if (search) {
      query = query.or(`name_en.ilike.%${search}%,name_ka.ilike.%${search}%`);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching games:", error.message);
      throw new Error(error.message);
    }
    console.log(data);
    return data ?? [];
  } catch (error) {
    console.error("Error fetching games:", error);
    throw new Error(`Failed to fetch games: ${error}`);
  }
};

export const getGames = async (): Promise<GameType[]> => {
  try {
    const { data, error } = await supabase.from("games").select("*");
    if (error) {
      console.error("Error fetching games:", error.message);
      throw new Error(error.message);
    }
    console.log(data);
    return data ?? [];
  } catch (error) {
    console.error("Error fetching games:", error);
    throw new Error(`Failed to fetch games: ${error}`);
  }
};

//for profile page
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

//

export const getGamesByUserId = async (
  userId: string | undefined,
): Promise<GameType[] | null> => {
  try {
    const { data, error } = await supabase
      .from("games")
      .select("*")
      .eq("user_id", userId as string);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (err) {
    console.error("Error fetching game by ID:", err);
    throw new Error("Failed to fetch game. Please try again later.");
  }
};

export const deleteGamesById = async (id: number): Promise<GameType | null> => {
  try {
    const { data: game, error: fetchError } = await supabase
      .from("games")
      .select("image_url")
      .eq("id", id)
      .single();

    if (fetchError) {
      throw new Error(fetchError.message);
    }

    if (game?.image_url) {
      const { error: deleteImageError } = await supabase.storage
        .from("game_images")
        .remove([game.image_url]);

      if (deleteImageError) {
        throw new Error(deleteImageError.message);
      }
    }

    const { data, error: deleteError } = await supabase
      .from("games")
      .delete()
      .eq("id", id);

    if (deleteError) {
      throw new Error(deleteError.message);
    }

    return data;
  } catch (error) {
    console.error("Error deleting game:", error);
    throw new Error(
      `Failed to delete game: ${error instanceof Error ? error.message : error}`,
    );
  }
};
