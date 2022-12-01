import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Box, Heading, Text } from "@chakra-ui/react";
import { CentralTheme } from "../../theme";

export default function PostExcerpt({ post }) {
  const { lines } = CentralTheme();

  return (
    <div>
      <Box borderBottom="1px" borderColor={lines} p={4}>
        <Heading as="h3" size="md">
          {post.title}
        </Heading>
        <Text noOfLines={3} fontSize="md" py={1}>
          {post.body}
        </Text>
        <Box pt={2}>
          <PostAuthor userId={post.userId} />,
          <TimeAgo timeStamp={post.date} />
        </Box>
        <ReactionButtons post={post} />
      </Box>
    </div>
  );
}
