import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";
import {
  FormControl,
  FormLabel,
  Textarea,
  Box,
  Input,
  Flex,
  Spacer,
  Button,
  Heading,
  FormErrorMessage,
  FormHelperText,
  HStack,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { CentralTheme } from "../../theme";

function AddPost({ setShowAddForm }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState({});

  const { bg, lines } = CentralTheme();

  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUser(e);

  const onFormSubmited = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(addPost(title, content, user.value));
    }
    setTitle("");
    setContent("");
    setShowAddForm(false);
  };

  const userOptions = users.map((user) => ({
    label: user.name,
    value: user.id,
  }));

  return (
    <Box className="bg-modal">
      <Box p={4} bg={bg} w="400px">
        <HStack>
          <Heading as="h3" mb={3}>
            Add a new post
          </Heading>
        </HStack>
        <Box
          as="form"
          display="flex"
          flexDirection="column"
          gap={4}
          onSubmit={onFormSubmited}
        >
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="Title"
              onChange={onTitleChanged}
              value={title}
            />
          </FormControl>

          <FormControl isRequired>
            <Select
              placeholder="Select option"
              onChange={onAuthorChanged}
              value={user}
              options={userOptions}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Content</FormLabel>
            <Textarea
              placeholder="Content"
              onChange={onContentChanged}
              value={content}
            />
          </FormControl>
          <Flex>
            <Spacer />
            <Button
              type="button"
              colorScheme="blue"
              variant="outline"
              onClick={() => setShowAddForm(false)}
              mr={4}
            >
              Cancel
            </Button>
            <Button type="submit" colorScheme="blue" variant="solid">
              Save
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default AddPost;
