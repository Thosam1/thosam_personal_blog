// wrapper for any page we want to add to the website
// -> wrap the container around everything in index.js
// avoids rewriting same page styles
// -> we will have the same for blog posts layouts 

import React from 'react'

// for Chakra
import {
    useColorMode,
    Button,
    Flex,
    Box
} from '@chakra-ui/react'

// for links in Navbar
import NextLink from 'next/link'

// used for navbar
import styled from '@emotion/styled'

// darkmode switch component in the navbar -> since it will be shown in every page
import DarkModeSwitch from '../components/DarkModeSwitch'

const Container = ({ children }) => {

    // for customizing based on light mode vs dark mode -> dynamically
    const { colorMode } = useColorMode()

    const bgColor = {
        light: 'white',
        dark: '#171717'
    }

    const color = {
        light: 'black',
        dark: 'white'
    }

    const navHoverBg = {
        light: 'gray.600',
        dark: 'gray.300',
    }

    // building our navbar
    const StickyNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height .5s, line-height .5s;
        `

    return (
        <>
            {/* Navbar -> on every page */}
            <StickyNav
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="800px"
                minWidth="356px"
                width="100%"
                bg={bgColor[colorMode]}
                as="nav"
                px={[2, 6, 6]}
                py={2}
                mt={8}
                mb={[0, 0, 8]}
                mx="auto"
            >
                <Box>
                    <NextLink href="/" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                            Home
                        </Button>
                    </NextLink>
                    <NextLink href="/blog" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                            Blog
                        </Button>
                    </NextLink>
                </Box>
                <DarkModeSwitch />
            </StickyNav >

            {/* This will hold the code for the rest of the page -> in the "Flex" component */}
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={bgColor[colorMode]} // bg color
                color={color[colorMode]} // text color
                px={[0, 4, 4]}
                mt={[4, 8, 8]}
            >
                {children}
            </Flex>
        </>
    )
}

export default Container;
