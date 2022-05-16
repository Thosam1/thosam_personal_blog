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
  AspectRatio,
} from "@chakra-ui/react";

// components
import Container from "../components/Container"; // wrapper of pages
import ProjectCards from "../components/ProjectCards";

// SEO
import { NextSeo } from "next-seo";

const url = "https://thosam.vercel.app/";
const title = "Thösam Norlha-Tsang";
const description =
  "Software Engineer, AI enthusiast and Video Creator. This is my personal website where you can read my articles and have a look at my portfolio - Have fun !";

// overriding SEO
const SEO = {
  title,
  description,
  canonical: url,

  openGraph: {
    title,
    description,
    url,
  },
};

export default function Index() {
  const { colorMode } = useColorMode();

  // so subtext is a bit lighter
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.500",
  };

  return (
    <>
      <NextSeo {...SEO} />
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

            <Stack direction={"row"} align={"center"}>
              <Link href="/portfolio" title="portfolio">
                <Button mt={5}>My works 💻</Button>
              </Link>
            </Stack>
          </Flex>
          {/* youtube featured video */}
          <Box mt={[10, 10, 0]} w={["100%", "100%", "50%"]}>
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.youtube.com/embed/IY25_P40beA" // ?autoplay=1 // i put this to 0 to avoid using network resources and optimize website speed
                alt="Featured YouTube video"
                allowFullScreen={true}
                style={{ borderRadius: 10 }}
                title="Something Just Like This - Fingerstyle Cover"
              />
            </AspectRatio>
          </Box>
        </Flex>

        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="800px"
          px={2}
        >
          {/* Lower sections */}
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="800px"
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
                <Link
                  color="blue.500"
                  href="https://www.epfl.ch/en/"
                  isExternal
                >
                  EPFL
                </Link>{" "}
                where I study computer science. My personal website is where I
                showcase my projects, writing, statistics, experience, and more.
                Feel free to reach out via email or any social media. or
                subscribe to my newsletter !
              </Text>

              <Link href="/about">
                <Button mt={5} mb={10}>
                  More about me 😁
                </Button>
              </Link>
            </Box>

            {/* Featured Projects */}
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

              <ProjectCards featured={true} />

              <Link href="/portfolio">
                <Button mt={5} mb={10}>
                  Wanna see more ? 😄
                </Button>
              </Link>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
