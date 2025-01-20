import supabase from "..";
import { commentType } from "./types";

export const getCommentsByGameId = async (
  id: number,
): Promise<commentType[]> => {
  try {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("game_id", id);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (err) {
    console.error("Error fetching comments", err);
    throw new Error("Failed to fetch comments. Please try again later.");
  }
};

export const addCommentsByGameId = async ({
  id,
  comment,
}: {
  id: number;
  comment: string;
}) => {
  try {
    const { data, error } = await supabase
      .from("comments")
      .insert({ game_id: id, comment: comment });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (err) {
    console.error("Error", err);
    throw new Error("Failed Edd comments. Please try again later.");
  }
};
