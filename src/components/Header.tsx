import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme/ThemeToggle";

export default function Header() {
  return (
    <header className="h-16 w-full flex items-center justify-between py-4 px-10 self-start">
      <div className="cursor-pointer">
        <img src="/fulllogo.png" alt="PixaGram" className="h-12" />
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <SignedOut>
          <Button>
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <Button
            variant={"ghost"}
            className="rounded-full p-0 size-8 border-[2px] border-gray-300"
          >
            <UserButton />
          </Button>
        </SignedIn>
      </div>
    </header>
  );
}
