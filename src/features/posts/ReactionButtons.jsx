import React from "react";
import { HStack, IconButton, Spacer } from "@chakra-ui/react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addReaction } from "./postSlice";
import { Text, Box } from "@chakra-ui/react";

export default function ReactionButtons({ post }) {
  const dispatch = useDispatch();

  return (
    <HStack>
      <Spacer />
      <HStack>
        <IconButton
          icon={<AiFillLike />}
          variant="ghost"
          borderRadius="50%"
          size="sm"
          onClick={() =>
            dispatch(addReaction({ postId: post.id, reaction: "like" }))
          }
        />
        <Text>{post.reactions["like"]}</Text>
      </HStack>
      <HStack>
        <IconButton
          icon={<AiFillDislike />}
          variant="ghost"
          borderRadius="50%"
          size="sm"
          onClick={() =>
            dispatch(addReaction({ postId: post.id, reaction: "dislike" }))
          }
        />
        <Text>{post.reactions["dislike"]}</Text>
      </HStack>
    </HStack>
  );
}
