import { useState, useEffect } from "react";

// for Chakra
import { useColorMode, Flex, Button, Box } from "@chakra-ui/react";

// icon
import { FaRocket } from "react-icons/fa";

// animation
import { motion } from "framer-motion"; // would be nice to make the logo vertical and animate to the top if clicked

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  // otherwise we get window is not defined error
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  });

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  return (
    <Box position="fixed" bottom="50px" right={["16px", "100px"]} zIndex={2}>
        <Button
          style={{ display: visible ? "inline" : "none" }}
          onClick={scrollToTop}
        >
          <FaRocket />
        </Button>
    </Box>
  );
};

export default ScrollTopButton;
