// our blog page
import React, { useState } from "react";
import Head from "next/head";

// chakra components
import {
  Heading,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  Spacer
} from "@chakra-ui/react";

// custom components
import Container from "../components/Container";
import BlogPost from "../components/BlogPost";

// chakra icon
import { SearchIcon } from "@chakra-ui/icons";

// custom function to fetch data
import { getAllFilesFrontMatter } from "../lib/mdx";

export default function Blog({ posts }) {
  // state is needed for search functionality
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts
    .sort(
      // sorting most recent first
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <Head>
        <title>Blog - Thösam Norkha-Tsang</title>
      </Head>
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="800px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="800px"
            px={4}
          >
            <Heading letterSpacing="tight" mb={8} as="h1" size="2xl">
              My blog 📝
            </Heading> 
            {/* <Text>
            ({posts.length} posts)
            </Text> */}
            <InputGroup mb={4} mr={4} w="100%" alignContent={"center"}>
              <Input
                aria-label="Search by title"
                placeholder="Search by title"
                onChange={(e) => setSearchValue(e.target.value)}
                variant='unstyled'
                // border="1px"
                p="15px"
                bg={"blackAlpha.500"}
                borderRadius="10px"
              />
              <InputRightElement>
                <SearchIcon color="gray.300" />
              </InputRightElement>
            </InputGroup>

            {!filteredBlogPosts.length && "No posts found :("}
            
            <VStack spacing={6}>
            {filteredBlogPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
            </VStack>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}

// fetching data
export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
