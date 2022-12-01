import { extendTheme, withDefaultColorScheme  } from '@chakra-ui/react'
import { useColorModeValue } from "@chakra-ui/react";

export const CentralTheme = () => {
 const bg = useColorModeValue("white", "gray.800");
 const color = useColorModeValue("gray.800", "white");
 const  lines = useColorModeValue("gray.800", "whiteAlpha.400")
 return {bg, color, lines}
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({config});


export default theme