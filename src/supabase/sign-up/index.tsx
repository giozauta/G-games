import supabase from "..";

export const register = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error("Sign-up error:", error.message);
      return { success: false, error: error.message };
    }
    console.log("Sign-up successful:", data);
    return { success: true, data };
  } catch (err) {
    console.error("Unexpected error during sign-up:", err);
    return { success: false, error: "Unexpected error occurred." };
  }
};
