import React from "react";

// for Chakra
import {
  useColorMode,
  Button, // to separate in a different file
  Flex,
  Box,
  HStack,
} from "@chakra-ui/react";

// for links in Navbar
import NextLink from "next/link";

// to get info about current route
import { useRouter } from "next/router";

// used for navbar
import styled from "@emotion/styled";

// darkmode switch component in the navbar -> since it will be shown in every page
import DarkModeSwitch from "./DarkModeSwitch";

// animations <3
import { motion } from "framer-motion";

const Navbar = () => {
  // for customizing based on light mode vs dark mode -> dynamically
  const { colorMode } = useColorMode();

  // no need since defined in _app.js
  // const bgColor = {
  //   light: "#F7FAFC",
  //   dark: "#171717",
  // };

  const color = {
    light: "RGBA(0, 0, 0, 0.90)",
    dark: "white",
  };

  const navHoverBg = {
    light: "gray.100",
    dark: "gray.700",
  };

  // building our navbar
  const StickyNav = styled(Flex)`
    /* position: sticky; */
    z-index: 10;
    top: 0;
    /* backdrop-filter: saturate(180%) blur(20px); */
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="800px"
        minWidth="356px"
        width="100%"
        // bg={bgColor[colorMode]}
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
        color={color[colorMode]}
      >
        <Box>
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              About
            </Button>
          </NextLink>
          <NextLink href="/portfolio" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Portfolio
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Blog
            </Button>
          </NextLink>
          {/* <NextLink href="/youtube" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Youtube
            </Button>
          </NextLink> */}
          {/* <NextLink href="/stats" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Stats
            </Button>
          </NextLink> */}
        </Box>
        <DarkModeSwitch />
      </StickyNav>
    </motion.div>
  );
};

export default Navbar;
