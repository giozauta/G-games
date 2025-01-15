import supabase from "..";
import { GamesInfoType } from "./types";

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
