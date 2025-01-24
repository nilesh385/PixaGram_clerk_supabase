import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import useSupabaseClient from "./useSupabaseClient";

export function useOwnPosts(userId: string) {
  const supabase = useSupabaseClient();

  return useQuery({
    queryKey: ["ownPosts", userId],
    queryFn: async () => {
      if (!supabase) throw new Error("Supabase not initialized");

      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        toast.error("Error fetching posts: " + error.message);
        throw error;
      }

      return data;
    },
    enabled: !!supabase && !!userId,
    staleTime: 2 * 60 * 1000,
  });
}
