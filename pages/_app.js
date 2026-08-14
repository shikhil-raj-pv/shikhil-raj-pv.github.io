import '../styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'
import Layout from '../components/Common/Layout'
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()
const GA_MEASUREMENT_ID = 'G-LBWX9ZSFZ9';

export default function App({Component, pageProps}) {
    return (
        <QueryClientProvider client={queryClient}>
            <Head>
                <title>Shikhil Raj PV | Odoo Developer</title>
            </Head>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />

            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
            </Script>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </QueryClientProvider>
    )
}
