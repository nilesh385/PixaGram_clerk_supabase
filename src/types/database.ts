export interface Database {
  posts: {
    post_id: string;
    user_id: string;
    title: string;
    description: string;
    image: string;
    created_at: Date;
  };
}
