import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Header from "./Header";

export default function Layout() {
  return (
    <Flex className="App" minH="100vh" minW="100vw" flexDirection="column">
      <Header />
      <Outlet flexGrow="1" />
    </Flex>
  );
}
