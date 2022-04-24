import Head from "next/head";

// more chakra ui elements
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button,
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
          <Heading mb={2}>Hi, I'm Thösam Norlha-Tsang</Heading>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante
            nunc, finibus sit amet purus quis, congue vulputate ipsum. Phasellus
            lobortis bibendum orci, quis imperdiet lectus imperdiet porttitor.
          </Text>
          <Button
            data-splitbee-event="Button Click"
            data-splitbee-event-type="Resume"
          >
            View Resume
          </Button>
        </Flex>
      </Stack>
    </Container>
  );
}
