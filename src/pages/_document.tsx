import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document (): JSX.Element {
  return (
    <Html lang="en">
      <Head><title>NoteVision</title></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
