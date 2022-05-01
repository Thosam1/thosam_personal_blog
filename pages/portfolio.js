/* Portfolio - page */
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
} from "@chakra-ui/react";

// components
import Container from "../components/Container"; // wrapper of pages
import SkillCards from "../components/SkillCards";

// animations
import { motion } from "framer-motion";

// icon
import { GrBlockQuote } from "react-icons/gr";
import { FiMail } from "react-icons/fi";

const Portfolio = () => {
  const { colorMode } = useColorMode();

  // so subtext is a bit lighter
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <Container>
      <Head>
        <title>Portfolio - Thösam Norlha-Tsang</title>
      </Head>

      <Flex
        w="100%"
        flexDir={["column", "column", "row"]}
        align="center"
        px={4}
        mt={[8, 8, 16]}
        mb={40}
        maxW="1200px"
        mx="auto"
      >
        <Flex flexDir="column" w={["100%", "100%", "50%"]} mr={[0, 0, 4]}>
          <Heading mb={3}>Hi 👋, I'm Thösam</Heading>
          <Text color={colorSecondary[colorMode]} mb={3}>
            I am a <b>software engineer</b>, creator and student living in
            Switzerland.
          </Text>

          <Text color={colorSecondary[colorMode]}>
            This is the portfolio page of my personal website !
          </Text>

          <Flex>
            <Button
              data-splitbee-event="Button Click"
              data-splitbee-event-type="Resume"
              mt={5}
              mb={10}
              mr={25}
              maxW="120px"
            >
              <Link href="/portfolio">My works</Link>
            </Button>

            <Button
              data-splitbee-event="Button Click"
              data-splitbee-event-type="Resume"
              mt={5}
              mb={10}
              maxW="140px"
              leftIcon={<FiMail />}
            >
              <Link
                href="mailto:thosamthosamthosam@gmail.com"
                title="Email"
                isExternal
              >
                Contact me
              </Link>
            </Button>
          </Flex>
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
          {/* Quote time */}
          <Flex
            mb={4}
            bgColor={useColorModeValue("gray.100", "gray.900")}
            p={[5, 20, 50]}
            borderRadius={3}
            as="blockquote"
            borderLeft="10px solid"
            borderLeftColor={useColorModeValue("blue.400", "blue.700")}
          >
            <Icon
              as={GrBlockQuote}
              fontSize={40}
              color={colorSecondary[colorMode]}
              mr={4}
            />
            <Flex flexDir="column">
              <Text
                fontSize="xl"
                fontStyle="italic"
                color={colorSecondary[colorMode]}
              >
                Your time is limited, so don’t waste it living someone else’s
                life. Don’t be trapped by dogma—which is living with the results
                of other people’s thinking. Don’t let the noise of others’
                opinions drown out your own inner voice. And most important,
                have the courage to follow your heart and intuition.
              </Text>
              <Text fontSize="xl" fontWeight="bold" mt={2}>
                Steve Jobs
              </Text>
            </Flex>
          </Flex>

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
              Effective time-manager, detailed oriented, able to organize and
              prioritize tasks, meet deadlines and work to reach targets. <br />
              Good communication, analytical and organization skills, very
              motivated. I am accurate and proactive, reliable, motivated to
              learn and ready to develop to my full potential.
            </Text>
          </Box>

          {/* Tech Stack */}
          <Box as="section" mt={10} mb={10}>
            <Heading
              letterSpacing="tight"
              mt={8}
              size="lg"
              fontWeight={700}
              as="h2"
              mb={7}
            >
              Tech Stack
            </Heading>

            <SkillCards />
          </Box>

          {/* Featured Projects */}
          <Box as="section" mt={10} mb={10}>
            <Heading
              letterSpacing="tight"
              mt={8}
              size="lg"
              fontWeight={700}
              as="h2"
              mb={7}
            >
              Projects
            </Heading>

            <SkillCards />
          </Box>

          {/* Education */}
          <Box as="section" mt={10} mb={10}>
            <Heading
              letterSpacing="tight"
              mt={8}
              size="lg"
              fontWeight={700}
              as="h2"
              mb={7}
            >
              Contact me
            </Heading>

            <SkillCards />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Portfolio;
