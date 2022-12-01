import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { Text } from "@chakra-ui/react";

export default function PostAuthor({ userId }) {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id == userId);
  return <Text as="cite">By {author ? author.name : "unkown author"}</Text>;
}
