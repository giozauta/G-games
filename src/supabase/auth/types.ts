import { Session, User, WeakPassword } from "@supabase/supabase-js";

export type  UserType={
    user: User|null;
    session: Session|null;
    weakPassword?: WeakPassword|null;
}


export type RegisterType={ success: boolean; data?: UserType; error?: string }