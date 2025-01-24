import { PostSingleType } from "@/types/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import moment from "moment";
import { Avatar, AvatarImage } from "../ui/avatar";
import PostActions from "./PostActions";
import useFetchProfile from "@/hooks/useFetchProfile";

type Props = {
  post: PostSingleType;
};
export default function PostSingle({ post }: Props) {
  const duration = moment(post.created_at).fromNow();
  const { data: user } = useFetchProfile({ userId: post.user_id });
  return (
    <Card className="h-full w-full flex flex-col gap-5 mx-5 overflow-hidden">
      <CardHeader>
        <div className="flex gap-5 juctify-center items-center">
          <Avatar className="cursor-pointer">
            <AvatarImage src={user?.image} />
          </Avatar>
          <div>
            <p>@{user?.username}</p>
            <p className="text-sm text-gray-400">{user?.fullname}</p>
          </div>
        </div>
        <Separator />
        <CardTitle className="pt-5">{post.title}</CardTitle>
        <CardDescription>{post.description}</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="w-full h-full flex flex-col flex-grow gap-5 justify-center items-center ">
        {post.image && (
          <div className="w-full h-fullflex flex-col flex-grow gap-5 justify-center items-center">
            <img
              src={post.image}
              alt="image"
              className="w-full max-h-[70vh] object-cover rounded-lg "
            />
            <Separator className="w-full mt-5" />
          </div>
        )}
        <div className="w-full flex justify-between mt-auto">
          <PostActions />
          <div className="text-sm text-gray-500 text-end px-5">{duration}</div>
        </div>
      </CardContent>
    </Card>
  );
}
