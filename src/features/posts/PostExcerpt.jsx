import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import {
  Box,
  Heading,
  HStack,
  Spacer,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { CentralTheme } from "../../theme";
import { Link } from "react-router-dom";

export default function PostExcerpt({ post }) {
  const { lines } = CentralTheme();
  console.log(lines);

  return (
    <div>
      <Box borderBottom="1px" borderColor={lines} p={4}>
        <HStack>
          <Heading as="h3" size="md">
            {post.title}
          </Heading>
        </HStack>
        <Text noOfLines={2} fontSize="md" py={1}>
          {post.body}
        </Text>
        <Box pt={2}>
          <Link to={`post/${post.id}`}>
            {" "}
            <Text as="ins">View Post</Text>
            {"   "}
          </Link>
          <PostAuthor userId={post.userId} />,
          <TimeAgo timeStamp={post.date} />
        </Box>
        <ReactionButtons post={post} />
      </Box>
    </div>
  );
}
