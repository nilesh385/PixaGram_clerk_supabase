import { useAuth } from "@clerk/clerk-react";
import Header from "./components/Header";
import CreatePost from "./components/posts/CreatePost";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import PostContainer from "./components/posts/PostContainer";
import SearchContainer from "./components/search/SearchContainer";

export default function App() {
  const { isSignedIn } = useAuth();
  return (
    <div className="h-dvh w-dvw flex flex-col overflow-hidden ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchContainer />} />
        <Route path="/ownPosts" element={<PostContainer />} />
      </Routes>
      {isSignedIn && <CreatePost />}
    </div>
  );
}
