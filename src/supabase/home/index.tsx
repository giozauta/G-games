import supabase from "..";
import { GameType } from "./type";

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
