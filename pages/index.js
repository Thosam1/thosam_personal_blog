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
  AspectRatio,
} from "@chakra-ui/react";

// components
import Container from "../components/Container"; // wrapper of pages

// animations
import { motion } from "framer-motion";

export default function Index() {
  const { colorMode } = useColorMode();

  // so subtext is a bit lighter
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };


  return (
    <Container>
      <Head>
        <title>Home - Thösam Norlha-Tsang</title>
      </Head>

      <Flex
        w="100%"
        flexDir={["column", "column", "row"]}
        align="center"
        px={4}
        mt={[8, 8, 16]}
        mb={8}
        maxW="1200px"
        mx="auto"
      >
        <Flex flexDir="column" w={["100%", "100%", "50%"]} mr={[0, 0, 4]}>
          <Heading mb={3}>Hi everyone 👋, I'm Thösam</Heading>
          <Text color={colorSecondary[colorMode]} mb={3}>
            I am a <b>software engineer</b>, creator and student living in
            Switzerland.
          </Text>

          <Text color={colorSecondary[colorMode]}>
            On this website, you can find useful resources on topics like :
            coding, study, life, guitar, books, ... Feel free to check out my{" "}
            <Link href="/blog" color="blue.500">
              Blog
            </Link>{" "}
            if you like reading, otherwise you can check my{" "}
            <Link href="/works" color="blue.500">
              Projects
            </Link>{" "}
            I have been working on. Or learn more{" "}
            <Link href="/about" color="blue.500">
              about me
            </Link>
            .
          </Text>
          
            <Button
              data-splitbee-event="Button Click"
              data-splitbee-event-type="Resume"
              mt={5}
              mb={10}
              maxW="120px"
            >
              <Link href="/portfolio">
              My works
              </Link>
            </Button>
          
        </Flex>
        {/* youtube featured video */}
        <Box mt={[10, 10, 0]} w={["100%", "100%", "50%"]}>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.6 }}
          >
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.youtube.com/embed/IY25_P40beA?autoplay=1"
                alt="Featured YouTube video"
                allowFullScreen={true}
                style={{ borderRadius: 10 }}
              />
            </AspectRatio>
          </motion.div>
        </Box>
      </Flex>

      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        {/* Lower sections */}
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          {/* About me */}
          <Box as="section" mt={10} mb={10}>
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
              where I study computer science. My personal website is where I
              showcase my projects, writing, statistics, experience, and more.
              Feel free to reach out via email or any social media. or subscribe
              to my newsletter !
            </Text>

            <Link href="/about">
              <Button
                data-splitbee-event="Button Click"
                data-splitbee-event-type="Resume"
                mt={5}
                mb={10}
              >
                More about me
              </Button>
            </Link>
          </Box>

          {/* About me */}
          <Box as="section" mt={10} mb={20}>
            <Heading
              letterSpacing="tight"
              mt={8}
              size="lg"
              fontWeight={700}
              as="h2"
              mb={4}
            >
              Featured Projects
            </Heading>

            <Button
              data-splitbee-event="Button Click"
              data-splitbee-event-type="Resume"
              mt={5}
              mb={10}
            >
              Check out my Portfolio
            </Button>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
