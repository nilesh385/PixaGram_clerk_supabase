import { z } from "zod";

export const postSchema = z.object({
  title: z.string({
    required_error: "Title is required.",
  }),
  description: z.string(),
  image: z.string(),
});

export type Post = z.infer<typeof postSchema>;
