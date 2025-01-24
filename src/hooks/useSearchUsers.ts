import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Profile } from "@/types/types";
import useSupabaseClient from "./useSupabaseClient";

async function searchUsers(supabase: any, text: string): Promise<Profile[]> {
  if (!text) return [];

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .or(`username.ilike.%${text}%, fullname.ilike.%${text}%`);

  if (error) throw error;
  return data;
}

export default function useSearchUsers(text: string) {
  const supabase = useSupabaseClient();
  const [searchTerm, setSearchTerm] = useState(text);

  const query = useQuery({
    queryKey: ["searchUsers", searchTerm],
    queryFn: () => searchUsers(supabase, searchTerm),
    enabled: searchTerm.length >= 2,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(text);
      if (text.length >= 2) {
        query.refetch();
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(timer);
  }, [text, query]);

  return query;
}
