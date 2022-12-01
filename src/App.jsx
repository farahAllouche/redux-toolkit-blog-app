import { useState } from "react";
import "./App.css";
import { Counter } from "./features/counter/Counter";
import { PostsList } from "./features/posts/PostsList";
import { Box } from "@chakra-ui/react";
import ColorModeSwitch from "./theme/ColorModeSwitch";
import { CentralTheme } from "./theme";

function App() {
  const { bg, color } = CentralTheme();
  return (
    <Box className="App" minH="100vh" display="flex" justifyContent="center">
      {/*<Counter />*/}
      <ColorModeSwitch />

      <PostsList />
    </Box>
  );
}

export default App;
