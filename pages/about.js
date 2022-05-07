/* About me - page */
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
  Image,
  IconButton,
} from "@chakra-ui/react";

// import Image from "next/image";

// components
import Container from "../components/Container"; // wrapper of pages

// animations
import { motion } from "framer-motion";

// icons
import { FiMail } from "react-icons/fi";

// SEO
import { NextSeo } from "next-seo";

const url = 'https://thosam.vercel.app/about'
const title = "About me - Thösam Norlha-Tsang";
const description = "My about page where you can learn more about me !";

// overriding SEO
const SEO = {
  title,
  description,
  canonical: url,

  openGraph: {
    title,
    description,
    url
  },
};

const About = () => {

  // for customizing based on light mode vs dark mode -> dynamically
  const { colorMode } = useColorMode();

  // so subtext is a bit lighter
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  const borderIcon = {
    light: "gray.400",
    dark: "gray.500",
  };

  const footerHoverBg = {
    light: "gray.100",
    dark: "gray.700",
  };

  return (
    <>
      <NextSeo {...SEO} />
      <Container>
        <Head>
          <title>About me - Thösam Norlha-Tsang</title>
        </Head>
        <Flex
          w="100%"
          // h="400px"
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

            <Text color={colorSecondary[colorMode]} mb={3}>
              I go to{" "}
              <Link color="blue.500" href="https://www.epfl.ch/en/" isExternal>
                EPFL
              </Link>{" "}
              where I study computer science. My personal website is where I
              showcase my projects, writing, statistics, experience, and more.
              Feel free to reach out via email or any social media. or subscribe
              to my newsletter !
            </Text>

            <Text color={colorSecondary[colorMode]} mb={3}>
              I come from a Tibetan family and grew up in Lausanne/Prilly in
              Switzerland.
            </Text>
            <Text color={colorSecondary[colorMode]} mb={3}>
              I have a passion for everything related to science since I was a
              little kid.
            </Text>
            <Text color={colorSecondary[colorMode]} mb={3}>
              I used to watch documentaries about dinosaurs when I was 6-7 and
              by seeing graphics of dinausors walking in forests, I decided to
              become a paleontologist and create Jurassic Park. <br />
              Then the second obsession of mine was neurosurgeon, I've heard
              somewhere that the hardest job in medicine was neurosurgeon.{" "}
              <br />
              Then the third obsession of mine came when I finished watching the
              first season of Sword Art Online. Basically in this anime, we can
              immerse ourselves in a virtual world where we can feel pain and do
              everything we do in the real world. I thought that if I go into
              neuroscience, maybe one day, I will be able to create a full
              immersive experience of the real world, where we would just lay
              down on a bed and be able to run, jump, and battle with swords.
            </Text>

            <Stack direction={"row"} align={"center"}>
              <Link
                href="mailto:thosamthosamthosam@gmail.com"
                title="Email"
                isExternal
              >
                <Button
                  data-splitbee-event="Button Click"
                  data-splitbee-event-type="Resume"
                  mt={5}
                  leftIcon={<FiMail />}
                >
                  Contact me
                </Button>
              </Link>
            </Stack>
          </Flex>
          {/* youtube featured video */}
          <Box mt={[10, 10, 0]} w={["100%", "100%", "50%"]}>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <Image
                src={"/images/thosam_auth_image.jpg"}
                style={{ borderRadius: 10 }}
                maxH="600px"
                objectFit="cover"
                alt="me :)"
              />
            </motion.div>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default About;
