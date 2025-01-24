import { Profile } from "@/types/types";
import { create } from "zustand";

interface UserStoreState {
  searchedUsers: Profile[];
  setSearchedUsers: (users: Profile[]) => void;
}

const useUsersStore = create<UserStoreState>((set) => ({
  searchedUsers: [],
  setSearchedUsers: (users) => set({ searchedUsers: users }),
}));

export default useUsersStore;
