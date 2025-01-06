import { Database } from "@/types/database";
import { useSession } from "@clerk/clerk-react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_ANON_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;

function createClerkSupabaseClient() {
  return createClient<Database>(supabaseUrl, supabaseKey, {
    global: {
      fetch: async (url, options = {}) => {
        const { session } = useSession();
        const clerkToken = await session?.getToken({
          template: "supabase",
        });

        const headers = new Headers(options?.headers);
        headers.set("Authorization", `Bearer ${clerkToken}`);
        return fetch(url, {
          ...options,
          headers,
        });
      },
    },
  });
}

export const supabase = createClerkSupabaseClient();
