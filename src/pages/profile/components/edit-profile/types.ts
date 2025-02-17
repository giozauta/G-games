export type FormValuesType = {
  nameEn: string;
  lastNameEn: string;
  locationEn: string;
  genderEn: string;

  nameKa: string;
  lastNameKa: string;
  locationKa: string;
  genderKa: string;

  phone: string;
  age: number;
};

export type UserDataPropType = {
  age: number | null;
  avatar_url: string | null;
  first_name_en: string | null;
  first_name_ka: string | null;
  gender_en: string | null;
  gender_ka: string | null;
  id: string | null;
  last_name_en: string | null;
  last_name_ka: string | null;
  location_en: string | null;
  location_ka: string | null;
  phoneNumber: string | null;
  updated_at: string | null;
};
