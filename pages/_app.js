// chakra ui imports
import {
  ChakraProvider,
  color,
  ColorModeProvider, // so light/dark mode can persist
  useColorMode,
} from "@chakra-ui/react";

// our custom theme
import customTheme from "../styles/theme";

// so when theme is switched, the entire page changes its color
import { Global, css } from "@emotion/react";

// importing prism light and dark theme for code snippets
import { prismLightTheme, prismDarkTheme } from "../styles/prism";

const GlobalStyle = ({ children }) => {
  // grabbing reference
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme };
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "#F7FAFC" : "#171717"};
          }
        `}
      />
      {children}
    </>
  );
};

// root app
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: true,
        }}
      >
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
