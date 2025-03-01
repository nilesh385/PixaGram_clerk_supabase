import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { LoaderCircleIcon, SearchIcon } from "lucide-react";
import { Card } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import useSearchUsers from "@/hooks/useSearchUsers";
import SearchedUser from "./SearchedUser";
import { Profile } from "@/types/types";
import useDebounce from "@/hooks/useDebounce";

export default function SearchContainer() {
  const [searchText, setSearchtext] = useState<string>("");
  const debouncedText = useDebounce(searchText, 300);
  const {
    data: searchedUsers,
    isLoading,
    error,
  } = useSearchUsers(debouncedText);
  return (
    <div className="w-[40%] h-full flex flex-col mx-auto">
      <div className="h-16 w-full flex ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="h-full w-full flex gap-1"
        >
          <Input
            type="text"
            placeholder="Enter username or fullname..."
            className="flex-grow"
            value={searchText}
            onChange={(e) => setSearchtext(e.target.value)}
            autoFocus
          />
          <Button type="submit" variant={"outline"} size={"icon"}>
            <SearchIcon />
          </Button>
        </form>
      </div>
      <Card className="h-[90%] w-full">
        <ScrollArea className="h-full w-full p-3 ">
          {error && (
            <div className="h-full w-full flex justify-center items-center">
              {error.message}
            </div>
          )}
          {isLoading && !searchedUsers && (
            <div className="h-full w-full flex justify-center items-center">
              <LoaderCircleIcon className="animate-spin " size={40} />
            </div>
          )}
          {!isLoading &&
            Array.isArray(searchedUsers) &&
            searchedUsers.length == 0 && (
              <div className="h-full w-full flex justify-center items-center">
                No users found...
              </div>
            )}

          {!isLoading &&
            Array.isArray(searchedUsers) &&
            searchedUsers.length > 0 &&
            searchedUsers.map((user: Profile) => (
              <SearchedUser key={user.user_id} user={user} />
            ))}
        </ScrollArea>
      </Card>
    </div>
  );
}
