import { Database } from "@/types/database";
import { useSession } from "@clerk/clerk-react";
import { createClient } from "@supabase/supabase-js";
import { useMemo } from "react";

const supabaseUrl = import.meta.env.VITE_SUPABASE_ANON_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;

export default function useSupabaseClient() {
  const { session } = useSession();

  const supabaseClient = useMemo(() => {
    if (!session) return null;

    return createClient<Database>(supabaseUrl, supabaseKey, {
      global: {
        fetch: async (url, options = {}) => {
          const clerkToken = await session.getToken({
            template: "pixagram",
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
  }, [session]);

  return supabaseClient;
}
