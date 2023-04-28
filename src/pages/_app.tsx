import "../styles/globals.css";

import { Space_Grotesk } from "@next/font/google";

import type { AppProps } from "next/app";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-sans: ${sans.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />{" "}
    </>
  );
}
