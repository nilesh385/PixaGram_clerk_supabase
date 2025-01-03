import { useAuth } from "@clerk/clerk-react";
import Header from "./components/Header";
import CreatePost from "./components/posts/CreatePost";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const { isSignedIn } = useAuth();
  return (
    <div className="h-dvh w-dvw flex flex-col overflow-hidden ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {isSignedIn && <CreatePost />}
    </div>
  );
}
