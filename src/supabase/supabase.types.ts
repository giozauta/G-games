export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      blogs: {
        Row: {
          created_at: string
          description_en: string | null
          description_ka: string | null
          id: number
          image_url: string | null
          title_en: string | null
          title_ka: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          description_en?: string | null
          description_ka?: string | null
          id?: number
          image_url?: string | null
          title_en?: string | null
          title_ka?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          description_en?: string | null
          description_ka?: string | null
          id?: number
          image_url?: string | null
          title_en?: string | null
          title_ka?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blogs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      comments: {
        Row: {
          comment: string | null
          created_at: string
          game_id: number | null
          id: number
          user_email: string | null
          user_id: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string
          game_id?: number | null
          id?: number
          user_email?: string | null
          user_id?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string
          game_id?: number | null
          id?: number
          user_email?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      games: {
        Row: {
          created_at: string
          date: number | null
          description_en: string | null
          description_ka: string | null
          id: number
          image_url: string | null
          likes: number | null
          name_en: string | null
          name_ka: string | null
          platform: string | null
          release_date: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          date?: number | null
          description_en?: string | null
          description_ka?: string | null
          id?: number
          image_url?: string | null
          likes?: number | null
          name_en?: string | null
          name_ka?: string | null
          platform?: string | null
          release_date?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          date?: number | null
          description_en?: string | null
          description_ka?: string | null
          id?: number
          image_url?: string | null
          likes?: number | null
          name_en?: string | null
          name_ka?: string | null
          platform?: string | null
          release_date?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "games_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          age: number | null
          avatar_url: string | null
          first_name_en: string | null
          first_name_ka: string | null
          full_name: string | null
          gender_en: string | null
          gender_ka: string | null
          id: string
          last_name_en: string | null
          last_name_ka: string | null
          location_en: string | null
          location_ka: string | null
          phoneNumber: string | null
          updated_at: string | null
        }
        Insert: {
          age?: number | null
          avatar_url?: string | null
          first_name_en?: string | null
          first_name_ka?: string | null
          full_name?: string | null
          gender_en?: string | null
          gender_ka?: string | null
          id: string
          last_name_en?: string | null
          last_name_ka?: string | null
          location_en?: string | null
          location_ka?: string | null
          phoneNumber?: string | null
          updated_at?: string | null
        }
        Update: {
          age?: number | null
          avatar_url?: string | null
          first_name_en?: string | null
          first_name_ka?: string | null
          full_name?: string | null
          gender_en?: string | null
          gender_ka?: string | null
          id?: string
          last_name_en?: string | null
          last_name_ka?: string | null
          location_en?: string | null
          location_ka?: string | null
          phoneNumber?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
