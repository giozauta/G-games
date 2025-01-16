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
