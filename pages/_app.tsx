import '../styles/globals.css'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps): any => {
  return <Component {...pageProps} />
}

export default MyApp
