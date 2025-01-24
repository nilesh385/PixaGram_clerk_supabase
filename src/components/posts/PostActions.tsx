import { HeartIcon, MessageCircleMoreIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function PostActions() {
  return (
    <div>
      <Button variant={"ghost"} size={"icon"}>
        <HeartIcon />
      </Button>
      <Button variant={"ghost"} size={"icon"}>
        <MessageCircleMoreIcon />
      </Button>
    </div>
  );
}
