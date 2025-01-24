export type commentType = {
  comment: string | null;
  created_at: string;
  game_id: number;
  game_name_en: string | null;
  game_name_ka: string | null;
  id: number;
  image_url: string | null;
  user_email: string | null;
  user_id: string | null;
};

export type Result = {
  game_id: number;
  game_name_en: string | null;
  game_name_ka: string | null;
  image_url: string | null;
  comments: { comment: string | null; comment_id: number }[];
};
