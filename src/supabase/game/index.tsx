import supabase from "..";
import { GameType } from "./types";

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
