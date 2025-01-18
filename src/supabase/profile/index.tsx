import supabase from "..";
import { NewProfileValuesType } from "./types";

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
