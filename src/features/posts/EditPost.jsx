import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectPostById, updatePost, deletePost } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";

import { useParams, useNavigate } from "react-router-dom";

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

export default function EditPost() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const post = useSelector((state) => selectPostById(state, Number(postId)));
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);
  const [requestStatus, setRequestStatus] = useState("idle");

  const userOptions = users.map((user) => ({
    label: user.name,
    value: user.id,
  }));

  const defaultAuthor = userOptions.find((user) => user.value === userId);

  if (!post)
    return (
      <Box>
        <Heading as="h2" size="md">
          Post not Found !
        </Heading>
      </Box>
    );
  let authorValue;
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => {
    setUserId(e.value);
    authorValue = e;
  };

  const canSave =
    [title, content, userId].every(Boolean) && requestStatus === "idle";

  const onFormSubmited = (e) => {
    e.preventDefault();

    if (canSave) {
      try {
        setRequestStatus("pending");
        dispatch(
          updatePost({
            id: post.id,
            title,
            body: content,
            userId,
            reactions: post.reactions,
          })
        ).unwrap(); //unwrap throws an error if smth go wrong

        setTitle("");
        setContent("");
        setUserId("");
        navigate(`/post/${postId}`);
      } catch (err) {
        console.error("Failed to save the post", err);
      } finally {
        setRequestStatus("idle");
      }
    }
  };

  const onDeletePostClicked = () => {
    try {
      setRequestStatus("pending");
      dispatch(deletePost({ id: post.id })).unwrap();

      setTitle("");
      setContent("");
      setUserId("");
      navigate("/");
    } catch (err) {
      console.error("Failed to delete the post", err);
    } finally {
      setRequestStatus("idle");
    }
  };

  return (
    <Box as="main" w="100%" display="flex" justifyContent="center">
      <Box p={4} w="400px">
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
              options={userOptions}
              onChange={onAuthorChanged}
              defaultValue={defaultAuthor}
              value={authorValue}
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
            <Button type="submit" colorScheme="blue" variant="solid" mr={4}>
              Save
            </Button>
            <Button
              type="button"
              colorScheme="blue"
              variant="outline"
              onClick={onDeletePostClicked}
            >
              Delete
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
