// found on official website :   https://nextjs.org/docs/advanced-features/custom-document
import { Html, Head, Main, NextScript } from "next/document";

// google fonts
// import { GoogleFonts } from 'next-google-fonts'

// chakra ui - specific
import { ColorModeScript } from "@chakra-ui/react";

export default function Document() {
  return (
    <Html lang="en">
      {/* <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" /> */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&family=M+PLUS+Rounded+1c:wght@500&display=swap" rel="stylesheet"></link> */}
      <style data-href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"></style>
      <Head>
        <meta
          name="google-site-verification"
          content="-NttIeCsNFX7bi_Rj6onoCpyFICL51IJWnNl0mwkE2U"
        />
      </Head>
      <body>
        <ColorModeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
