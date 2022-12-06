import { Box, Flex, Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import ColorModeSwitch from "../theme/ColorModeSwitch";
import { CentralTheme } from "../theme";
import { Link } from "react-router-dom";

export default function Header() {
  const { lines } = CentralTheme();
  return (
    <Box
      as="section"
      px="150px"
      py="10px"
      borderBottom="1px"
      borderColor={lines}
    >
      <Box as="nav" bg="bg-surface">
        <Flex justify="space-between" flex="1">
          <ButtonGroup variant="link" spacing="8">
            <Button>
              <Link to="/">Posts</Link>
            </Button>

            <Button>Trending</Button>
            <Button>Settings</Button>
          </ButtonGroup>

          <ColorModeSwitch />
        </Flex>
      </Box>
    </Box>
  );
}
