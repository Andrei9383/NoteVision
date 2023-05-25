/* eslint-disable react/no-unknown-property */
import '../styles/globals.css'
import React from 'react'

import { Space_Grotesk } from '@next/font/google'
import Header from '../../components/header/header'

import type { AppProps } from 'next/app'

const sans = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans'
})
export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
    <Header/>
      <style jsx global>
        {`
          :root {
            --font-sans: ${sans.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
