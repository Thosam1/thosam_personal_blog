import {
  VStack,
  HStack,
  Text,
  useColorModeValue,
  Link,
  Box,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import { MotionBox } from "./MotionBox";
// import { useLinkColor } from 'components/theme';
// import { usePalette } from 'react-palette';
import NextLink from "next/link";

const SkillCard = ({ name, image, link, description }) => {
  //   const linkColor = useLinkColor();
  //   const { data, loading } = usePalette(image);

  return (
    <MotionBox whileHover={{ y: -5 }}>
      {/* <NextLink href={link} passHref>
        <Link isExternal> */}
          <HStack
            p={4}
            bg={useColorModeValue("blue.100", "gray.800")}
            rounded="xl"
            borderWidth="1px"
            borderColor={useColorModeValue("gray.100", "gray.700")}
            w="100%"
            textAlign="left"
            align="start"
            spacing={4}
            _hover={{ shadow: "md" }}
          >
            <Box
              rounded="lg"
              p={2}
              position="relative"
              overflow="hidden"
              lineHeight={0}
              boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
            >
              <Box
                bg={useColorModeValue("orange.100", "#39465B")} 
                position="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
                opacity={0.25}
              ></Box>
              <Image
                src={image}
                height={26}
                width={26}
                layout="fixed"
                rounded="md"
              />
            </Box>
            <VStack
              align="start"
              justify="flex-start"
              spacing={1}
              maxW="lg"
              h="100%"
            >
              <VStack spacing={0} align="start" flexGrow={1}>
                <Text
                  fontWeight="bold"
                  fontSize="md"
                  noOfLines={2}
                  color="blue.500"
                >
                  {name}
                </Text>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.500", "gray.200")}
                >
                  {description}
                </Text>
              </VStack>
            </VStack>
          </HStack>
        {/* </Link>
      </NextLink> */}
    </MotionBox>
  );
};

export default SkillCard;
