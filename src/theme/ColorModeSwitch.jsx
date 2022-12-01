import React from "react";
import { Box, FormControl, Switch, FormLabel } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <FormControl>
        <IconButton
          icon={colorMode == "light" ? <SunIcon /> : <MoonIcon />}
          variant="ghost"
          borderRadius="50%"
          onClick={toggleColorMode}
        />
      </FormControl>
    </Box>
  );
}
