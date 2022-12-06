import { useState } from "react";
import "./App.css";
import { Counter } from "./features/counter/Counter";
import { PostsList } from "./features/posts/PostsList";
import { Box } from "@chakra-ui/react";
import { CentralTheme } from "./theme";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPost from "./features/posts/EditPost";

function App() {
  const { bg, color } = CentralTheme();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />
        <Route path="post">
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPost />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
