/* eslint-disable react/no-unknown-property */
import "../styles/globals.css";
import React from "react";

import { Space_Grotesk } from "@next/font/google";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import NoSSR from "react-no-ssr"

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <style jsx global>
        {`
          :root {
            --font-sans: ${sans.style.fontFamily};
          }
        `}
      </style>
      <NoSSR>
      <Component {...pageProps} />
      </NoSSR>
      <div>
        <Footer />
      </div>
    </>
  );
}
