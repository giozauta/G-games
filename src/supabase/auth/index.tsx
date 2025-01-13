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

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error("Login error:", error.message);
      return false;
    }
    console.log("Login successful:", data);
    return data;
  } catch (err) {
    console.error("Login error:", err);
    return err;
  }
};

export const logout = async () => {
  try {
    await supabase.auth.signOut();
    console.log("Logout successful");
  } catch (err) {
    console.error("Logout error:", err);
  }
};
