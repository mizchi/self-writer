import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { ChakraUIHeader } from "../components/Header";
export default function Index() {
  console.log("hello");

  return (
    <>
      <ChakraUIHeader />
      <Flex w="100%" minH="50vh" justifyContent="center">
        <Box minW="80vw">content</Box>
      </Flex>
    </>
  );
}
