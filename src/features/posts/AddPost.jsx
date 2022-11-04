import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Textarea,
  Box,
  Input,
  Flex,
  Spacer,
  Button,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

function AddPost() {
  return (
    <Box as="form" border="1px" borderColor="gray.600">
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input placeholder="Title" />
      </FormControl>
      <FormControl>
        <FormLabel>Content</FormLabel>
        <Textarea placeholder="Content" />
      </FormControl>
      <Flex>
        <Spacer />
        <Button colorScheme="blue">Button</Button>
      </Flex>
    </Box>
  );
}

export default AddPost;
