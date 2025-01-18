export type GameType = {
    created_at: string;
    date: number | null;
    description_en: string | null;
    description_ka: string | null;
    id: number;
    image_url: string | null;
    likes: number | null;
    name_en: string | null;
    name_ka: string | null;
    platform: string | null;
    release_date: string | null;
    user_id: string | null;
  };
  
  export type GameFormDataType = {
    description_en: string;
    description_ka: string;
    name_en: string;
    name_ka: string;
    platform: string;
    release_date: string;
    image: File | null | "";
  };
  
  export type GameNewDataType = {
    description_en: string;
    description_ka: string;
    name_en: string;
    name_ka: string;
    platform: string;
    release_date: string;
  };