import { useState } from "react";
import "./App.css";
import { Counter } from "./features/counter/Counter";
import { PostsList } from "./features/posts/PostsList";
import { Box } from "@chakra-ui/react";
import AddPost from "./features/posts/AddPost";

function App() {
  return (
    <Box
      className="App"
      bg="gray.800"
      minH="100vh"
      color="whiteAlpha.900"
      display="flex"
      justifyContent="center"
    >
      {/*<Counter />*/}

      <AddPost />
    </Box>
  );
}

export default App;
