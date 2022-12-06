import React, { useState } from "react";

import { useSelector } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError } from "./postSlice";

import { CentralTheme } from "../../theme";
import { Box, Heading, HStack, Spacer, Flex, Spinner } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

import AddPost from "./AddPost";
import PostExcerpt from "./PostExcerpt";

export const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const postsError = useSelector(getPostsError);
  const postsStatus = useSelector(getPostsStatus);

  const [showAddForm, setShowAddForm] = useState(false);
  const { lines } = CentralTheme();

  let content;
  if (postsStatus === "loading") {
    content = (
      <Flex align="center" justify="center" mt={4}>
        <Spinner size="xl" thickness="4px" speed="0.65s" />
      </Flex>
    );
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
    <Flex as="main" justifyContent="center" flexGrow="1">
      <Box
        w={500}
        minH=""
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
    </Flex>
  );
};
