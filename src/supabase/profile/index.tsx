import supabase from "..";
import { GamesInfoType, NewProfileValuesType } from "./types";

export const getGamesByUserId = async (
  userId: string | undefined,
): Promise<GamesInfoType[] | null> => {
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

export const updateUserById = async ({
  userId,
  updates,
}: {
  userId: string;
  updates: NewProfileValuesType;
}) => {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .update(updates)
      .eq("id", userId);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user. Please try again later.");
  }
};

export const deleteGamesById = async (id: number) => {
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
