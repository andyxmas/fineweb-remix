import React from "react";
import { Code, Box, Flex } from "@sanity/ui";

import { secondsToMinutes } from "~/lib/secondsToMinutes";

export default function Duration(props) {
  return (
    <Flex gap={3} align="center">
      <Box flex={1}>{props.renderDefault(props)}</Box>
      {props.value ? (
        <Code size={4}>{secondsToMinutes(props.value)}</Code>
      ) : null}
    </Flex>
  );
}
