import { z } from "zod";

export const postSchema = z.object({
  title: z.string({
    required_error: "Title is required.",
  }),
  description: z.string(),
  image: z.string(),
});

export type PostSingleType = {
  post_id: string;
  title: string;
  description: string;
  image: string;
  user_id: string;
  created_at: string;
};
export interface Profile {
  profile_id: string;
  user_id: string;
  username: string;
  fullname: string;
  email: string;
  image: string;
  created_at: string;
}
export const SearchSchema = z.object({
  search: z.string(),
});
export type Search = z.infer<typeof SearchSchema>;
export type Post = z.infer<typeof postSchema>;
