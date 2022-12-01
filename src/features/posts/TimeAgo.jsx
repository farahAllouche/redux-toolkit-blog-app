import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";
import { Text } from "@chakra-ui/react";

export default function TimeAgo({ timeStamp }) {
  let timeAgo = "";
  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return <Text as="cite"> {timeAgo}</Text>;
}
