import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme/ThemeToggle";
import { Link } from "react-router-dom";
import { GrDocumentUser } from "react-icons/gr";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Card, CardContent } from "./ui/card";
import { SearchIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="h-24 w-full flex items-center justify-center self-start mb-5">
      <Card className="shadow-lg h-full w-full">
        <CardContent className="h-full w-full flex items-center justify-between py-4 px-10 self-start">
          <div className="cursor-pointer">
            <Link to={"/"}>
              <img src="/fulllogo.png" alt="PixaGram" className="h-12" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <SignedOut>
              <Button>
                <SignInButton />
              </Button>
            </SignedOut>
            <SignedIn>
              {/* own post */}
              <Link to={"/ownPosts"}>
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant={"ghost"} size={"icon"}>
                      <GrDocumentUser />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>My Posts</p>
                  </TooltipContent>
                </Tooltip>
              </Link>
              {/* search */}
              <Link to={"/search"}>
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant={"ghost"} size={"icon"}>
                      <SearchIcon />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Search</p>
                  </TooltipContent>
                </Tooltip>
              </Link>
              <Button
                variant={"ghost"}
                className="rounded-full p-0 size-8 border-[2px] border-gray-300"
              >
                <UserButton />
              </Button>
            </SignedIn>
          </div>
        </CardContent>
      </Card>
    </header>
  );
}
