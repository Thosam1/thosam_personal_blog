// found on official website :   https://nextjs.org/docs/advanced-features/custom-document
import { Html, Head, Main, NextScript } from 'next/document'

// google fonts
import { GoogleFonts } from 'next-google-fonts'

// chakra ui - specific
import { ColorModeScript } from "@chakra-ui/react"

export default function Document() {
  return (
    <Html lang="en">
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" />
      <Head />
      <body>
        <ColorModeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}