import { useAuth } from "@clerk/clerk-react";
import PostSingle from "./Post";
import { ScrollArea } from "../ui/scroll-area";
import { useOwnPosts } from "@/hooks/useFetchPosts";
import { LoaderIcon } from "lucide-react";

export default function PostContainer() {
  const { userId } = useAuth();
  const { data: posts, isLoading } = useOwnPosts(userId!);
  return (
    <div className="h-full w-full flex justify-center items-center overflow-y-auto">
      <div className="h-full w-full md:max-w-[60%] flex flex-col gap-5 justify-center items-center">
        <h1 className="text-2xl font-bold px-5 text-start">Your Posts :</h1>
        {!posts && isLoading && (
          <LoaderIcon className="animate-spin" size={500} />
        )}
        <ScrollArea className="h-full w-full rounded-md mb-5 ">
          {posts &&
            !isLoading &&
            posts.map((post) => <PostSingle key={post.post_id} post={post} />)}
        </ScrollArea>
      </div>
    </div>
  );
}
