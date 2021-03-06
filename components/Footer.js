import {
  Flex,
  Link,
  IconButton,
  useColorMode,
  useColorModeValue,
  Box,
  Divider,
} from "@chakra-ui/react";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  // changing some colors based on theme
  const { colorMode } = useColorMode();

  const borderIcon = {
    light: "gray.400",
    dark: "gray.500",
  };

  const footerHoverBg = {
    light: "gray.100",
    dark: "gray.700",
  };

  // rendering
  return (
    <Box
      //  bgColor={useColorModeValue("rgb(248, 250, 252)", "gray.900")}
      mt={10}
      align="center"
    >
      <Divider maxWidth={400} bgColor={useColorModeValue("gray.500", "gray.900")}/>
      <Flex align="center" my={4} direction="column" pt={4}>
        <div>
          <Link
            href="https://www.youtube.com/channel/UCadaAVpUtRtVSfPPy7z5lXA"
            title="YouTube"
            isExternal
          >
            <IconButton
              aria-label="YouTube"
              icon={<FiYoutube />}
              size="lg"
              color={borderIcon[colorMode]}
              variant="ghost"
              _hover={{ backgroundColor: footerHoverBg[colorMode] }}
            />
          </Link>
          <Link
            href="https://www.instagram.com/tho_norlha/"
            title="Instagram"
            isExternal
          >
            <IconButton
              aria-label="Instagram"
              icon={<FiInstagram />}
              size="lg"
              color={borderIcon[colorMode]}
              variant="ghost"
              _hover={{ backgroundColor: footerHoverBg[colorMode] }}
            />
          </Link>
          <Link href="https://github.com/Thosam1" title="GitHub" isExternal>
            <IconButton
              aria-label="GitHub"
              icon={<FiGithub />}
              size="lg"
              color={borderIcon[colorMode]}
              variant="ghost"
              _hover={{ backgroundColor: footerHoverBg[colorMode] }}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/th%C3%B6sam-n-328932236/"
            title="LinkedIn"
            isExternal
          >
            <IconButton
              aria-label="LinkedIn"
              icon={<FiLinkedin />}
              size="lg"
              color={borderIcon[colorMode]}
              variant="ghost"
              _hover={{ backgroundColor: footerHoverBg[colorMode] }}
            />
          </Link>
          <Link
            href="mailto:thosamthosamthosam@gmail.com"
            title="Email"
            isExternal
          >
            <IconButton
              aria-label="Email"
              icon={<FiMail />}
              size="lg"
              color={borderIcon[colorMode]}
              variant="ghost"
              _hover={{ backgroundColor: footerHoverBg[colorMode] }}
            />
          </Link>
        </div>
      </Flex>
    </Box>
  );
};

export default Footer;
