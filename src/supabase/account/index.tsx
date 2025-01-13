import supabase from "..";
import { ProfileInfoType } from "./types";

export const getProfileInfo = async(id:string|undefined):Promise<ProfileInfoType|null>=>{
    if(id == null) return null;

    try{
        const response = await supabase
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single();

        if(response.error) throw new Error(response.error.message);
        return response.data;
    }catch (error) {
        throw new Error(`Failed to fetch profile info: ${error}`);
      }
}