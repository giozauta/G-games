import supabase from "..";
import { commentType, Result } from "./types";

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

export const getCommentsByUserId = async (
  user_id: string | undefined,
): Promise<Result[]> => {
  if (!user_id) {
    return [];
  }

  try {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("user_id", user_id);

    if (error) {
      throw new Error(error.message);
    }

    // გვჭირდება რომ დავაჯგუფოთ ერთიდაიგივე თამაშის კომენტარები
    const combinedComments = data.reduce(
      (acc, comment) => {
        if (!acc[comment.game_id]) {
          acc[comment.game_id] = {
            game_id: comment.game_id,
            game_name_en: comment.game_name_en,
            game_name_ka: comment.game_name_ka,
            image_url: comment.image_url,
            comments: [],
          };
        }
        acc[comment.game_id].comments.push({
          comment: comment.comment,
          comment_id: comment.id,
        });
        return acc;
      },
      {} as Record<string, Result>,
    );

    //ერაიდ რომ გარდავქმად
    const result = Object.values(combinedComments);
    return result;
  } catch (err) {
    console.error("Error fetching comments", err);
    throw new Error("Failed to fetch comments. Please try again later.");
  }
};

export const addCommentsByGameId = async ({
  id,
  comment,
  user_email,
  user_id,
  game_name_en,
  game_name_ka,
  image_url,
}: {
  id: number;
  comment: string;
  user_email: string;
  user_id: string;
  game_name_en: string;
  game_name_ka: string;
  image_url: string;
}): Promise<commentType[] | null> => {
  try {
    const { data, error } = await supabase.from("comments").insert({
      game_id: id,
      comment: comment,
      user_email: user_email,
      user_id: user_id,
      game_name_en: game_name_en,
      game_name_ka: game_name_ka,
      image_url: image_url,
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (err) {
    console.error("Error", err);
    throw new Error("Failed Edd comments. Please try again later.");
  }
};

export const deleteCommentById = async (id: number): Promise<void> => {
  try {
      const { error } = await supabase
          .from('comments')
          .delete()
          .eq('id', id);

      if (error) {
          throw new Error(`Failed to delete comment with id ${id}: ${error.message}`);
      }

      console.log(`Comment with id ${id} successfully deleted.`);
  } catch (err) {
      console.error(`Error deleting comment: ${(err as Error).message}`);
      throw err;
  }
};
