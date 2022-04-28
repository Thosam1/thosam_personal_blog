// wrapper for any page we want to add to the website
// -> wrap the container around everything in index.js
// avoids rewriting same page styles
// -> we will have the same for blog posts layouts

import React from "react";

// for Chakra
import {
  useColorMode,
  Flex,
} from "@chakra-ui/react";

// our components -> those we want rendered on every page
import Navbar from "./Navbar";
import Newsletter from "./Newsletter"
import Footer from "./Footer";

const Container = ({ children }) => {
  // for customizing based on light mode vs dark mode -> dynamically
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "white",
    dark: "#171717",
  };

  const color = {
    light: "black",
    dark: "white",
  };

  return (
    <>
      <Navbar />

      {/* This will hold the code for the rest of the page -> in the "Flex" component */}
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]} // bg color
        color={color[colorMode]} // text color
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        <Flex px={4} flexDir="column" minH="90vh">
          {children}
        </Flex>

        <Newsletter />
        <Footer />
      </Flex>
    </>
  );
};

export default Container;
