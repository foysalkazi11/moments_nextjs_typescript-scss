import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <title>Your Monents</title>
        <meta name="description" content="Share your moments with world" />
        
      </Head>

    <Component {...pageProps} />
    </>
  )
}

export default MyApp
