import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postSlice";

import { CentralTheme } from "../../theme";
import { Spinner } from "@chakra-ui/react";
import { Box, Heading, HStack, Spacer } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

import AddPost from "./AddPost";
import PostExcerpt from "./PostExcerpt";

export const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsError = useSelector(getPostsError);
  const postsStatus = useSelector(getPostsStatus);

  useEffect(() => {
    if (postsStatus == "idle") dispatch(fetchPosts());
  }, [postsStatus, dispatch]);

  const [showAddForm, setShowAddForm] = useState(false);
  const { lines } = CentralTheme();

  let content;
  if (postsStatus === "loading") {
    content = <Spinner size="xl" />;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
    console.log(content.length);
  } else if (postsStatus === "failed") {
    content = <p>{postsError}</p>;
  }

  return (
    <>
      <Box
        w={500}
        mx="300px"
        display="flex"
        flexDirection="column"
        borderX="1px"
        borderColor={lines}
      >
        <HStack py={2} borderBottom="1px" borderColor={lines} p={4}>
          <Heading as="h2">Posts</Heading>
          <Spacer />
          <IconButton
            icon={<AddIcon />}
            variant="ghost"
            borderRadius="50%"
            onClick={() => setShowAddForm(true)}
          />
        </HStack>

        {content}
      </Box>
      {showAddForm && <AddPost setShowAddForm={setShowAddForm} />}
    </>
  );
};
