import Head from "next/head"
import React from "react"

import Layout from "@/components/wrapper/Layout"
import { PropsProvider } from "@/contexts/PropsContext"

import "react-toastify/dist/ReactToastify.css"

import "public/styles/base/base.css"
import "public/styles/base/global.css"
import "public/styles/base/index.css"
import "public/styles/base/theme.css"

import "public/styles/css/fonts.css"
import "public/styles/css/toast.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=5, viewport-fit=cover"
          name="viewport"
        />
        <meta content="#000000" name="theme-color" />
        <meta content="Carlin Solutions" name="description" />

        <meta content="Carlin Solutions" property="og:title" />
        <meta content="Carlin Solutions" property="og:description" />
        <meta content="/img/banner.png" property="og:image" />
        <meta content="Carlin Solutions" property="og:site_name" />

        <meta content="Carlin Solutions" name="twitter:title" />
        <meta content="Carlin Solutions" name="twitter:description" />
        <meta content="/img/banner.png" name="twitter:image" />
        <meta content="summary_large_image" name="twitter:card" />

        <meta content="0F13FDC1F856EEC11AEF1C1A0D9B8328" name="msvalidate.01" />
      </Head>
      <PropsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PropsProvider>
    </>
  )
}

export default MyApp
