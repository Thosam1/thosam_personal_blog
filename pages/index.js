/* Main/Root - Home screen */

import Head from "next/head";

// more chakra ui elements
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button, // base
  Box, // extensions
  Link,
  useColorModeValue,
  SimpleGrid,
  Icon,
  Divider,
} from "@chakra-ui/react";

// components
import Container from "../components/Container"; // wrapper of pages

export default function Index() {
  const { colorMode } = useColorMode();

  // so subtext is a bit lighter
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  // for links
  const linkColor = {
    light: "blue.400",
    dark: "blue.600",
  };

  return (
    <Container>
      <Head>
        <title>Home - Thösam Norlha-Tsang</title>
      </Head>

      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={3}>Hi everyone 👋, I'm Thösam</Heading>
          <Text color={colorSecondary[colorMode]} mb={3}>
            I am a <b>software engineer</b>, creator and student living in Switzerland.
          </Text>

          <Text color={colorSecondary[colorMode]}>
            On this website, you can find useful resources on topics like :
            coding, study, life, guitar, books, ... Feel free to check out my 
            {" "}
            <Link
              href="/"
              color="blue.500"
            >
              Blog
            </Link>{" "}
            if you like reading, otherwise you can check my{" "}
            <Link
              href="/"
              color="blue.500"
            >
              Projects
            </Link>{" "}I have been
            working on. Or learn more{" "}
            <Link
              href="/"
              color="blue.500"
            >
              about me
            </Link>.
          </Text>
          <Button
            data-splitbee-event="Button Click"
            data-splitbee-event-type="Resume"
            mt={5}
            mb={10}
          >
            My works
          </Button>

          <Box as="section" mt={10} mb={20}>
            <Heading
              letterSpacing="tight"
              mt={8}
              size="lg"
              fontWeight={700}
              as="h2"
              mb={4}
            >
              About Me
            </Heading>
            <Text color={colorSecondary[colorMode]}>
              Hi everyone 👋, I'm Thösam Norlha-Tsang. I go to{" "}
              <Link color="blue.500" href="https://www.epfl.ch/en/" isExternal>
                EPFL
              </Link>{" "}
              where I study computer science. My personal
              website is where I showcase my projects, writing, statistics,
              experience, and more. Feel free to reach out via email or any social
              media. or subscribe to my newsletter !
            </Text>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
