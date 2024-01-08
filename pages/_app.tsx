import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/src/Components/layout'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
    <Toaster/>
  </Layout>
}
