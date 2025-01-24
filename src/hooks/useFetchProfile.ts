import { useQuery } from "@tanstack/react-query";
import useSupabaseClient from "./useSupabaseClient";

type Props = {
  userId: string;
};

export default function useFetchProfile({ userId }: Props) {
  const supabase = useSupabaseClient();
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      if (!supabase) throw new Error("Databse Error...");

      const { error, data } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", userId)
        .single();

      if (error) {
        console.log("Error fetching profile:: ", error);
        throw error.message;
      }
      return data;
    },
    enabled: !!supabase && !!userId,
    staleTime: 5 * 60 * 1000,
  });
}
