import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import {
  Box,
  Heading,
  HStack,
  Text,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { CentralTheme } from "../../theme";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

export default function SinglePostPage() {
  const { postId } = useParams();

  const { lines } = CentralTheme();
  console.log(lines);

  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post)
    return (
      <Box>
        <Heading as="h2" size="md">
          Post not Found !
        </Heading>
      </Box>
    );

  return (
    <Box w="100%" display="flex" justifyContent="center">
      <Box mx="300px" mt="50px" w={500} border="1px" borderColor={lines} p={4}>
        <HStack>
          <Heading as="h3" size="md">
            {post.title}
          </Heading>
          <Spacer />
          <Link to={`/post/edit/${post.id}`}>
            <IconButton
              icon={<EditIcon />}
              variant="ghost"
              borderRadius="50%"
            />
          </Link>
        </HStack>
        <Text fontSize="md" py={1}>
          {post.body}
        </Text>
        <Box pt={2}>
          <PostAuthor userId={post.userId} />,
          <TimeAgo timeStamp={post.date} />
        </Box>
        <ReactionButtons post={post} />
      </Box>
    </Box>
  );
}
