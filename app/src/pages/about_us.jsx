// create page that talkes about what our platform does

import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import React from "react";

export default function About() {
  return (
    <>
      <Navbar />

      <VStack spacing={8} mx={"auto"} maxW={"xl"} py={12} px={6}>
        <Box>
          <Heading mb={2}> Who we are?</Heading>
          <Text>
            At Unify, we believe that when people come together, magic can happen(ok, we don't mean that literally!).
          But we believe that we can make the world a better place. In order to achieve this, we need everyone to come together to help out. 
          </Text>
        </Box>
          
        <Box>
          <Heading mb={2}>How does this platform work?</Heading>
          <Text>
            Unify is a platform where people around the world can connect with each other and combat social issues. Users can chat about common interests as well 
          as support various issues such as helping refugees, hunger crisis, etc. Unify offers a way to securely donate to these issues via crowd-funding. Moreover,
            there is a 24/7 chatbot that can assist people, making sure they get what they need. With Unify, people can meet others and create a positive impact!
          </Text>
        </Box>
          
        <Box>
          <Heading mb={2}>
            Anything else?
          </Heading>
          <Text>
            We believe that you can make a positive difference! Sign up on our platform to get started!
          </Text>
        </Box>
      </VStack>
    </>
  );
}
