export type GamesInfoType = {
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

export type NewProfileValuesType = {
  first_name_en: string;
  last_name_en: string;
  location_en: string;
  gender_en: string;
  first_name_ka: string;
  last_name_ka: string;
  location_ka: string;
  gender_ka: string;
  phoneNumber: string;
  age: number;
};
