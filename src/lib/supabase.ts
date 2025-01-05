import { Database } from "@/types/database";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_ANON_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
export const auth = supabase.auth;
