import React from "react";
import { useSelector } from "react-redux";
import { Box, Heading, Text } from "@chakra-ui/react";
import { selectAllPosts } from "./postSlice";

export const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderPosts = posts.map((post) => (
    <Box key={post.id} borderBottom="1px" borderColor="gray.600" p={4}>
      <Heading as="h3" size="md">
        {post.title}
      </Heading>
      <Text noOfLines={3} fontSize="md" py={1}>
        {post.content}
      </Text>
    </Box>
  ));
  return (
    <Box
      w={500}
      mx="300px"
      display="flex"
      flexDirection="column"
      borderX="1px"
      borderColor="gray.600"
    >
      <Heading py={2} borderBottom="1px" borderColor="gray.600" p={4}>
        Posts
      </Heading>
      {renderPosts}
    </Box>
  );
};
