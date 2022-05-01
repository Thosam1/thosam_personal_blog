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
} from "@chakra-ui/react";

// components
import Container from "../components/Container"; // wrapper of pages

// animations
import { motion } from "framer-motion";

const Portfolio = () => {
    return (
        <h1>Portfolio</h1>
    );
}

export default Portfolio;