import Head from "next/head"
import React from "react"

import Footer from "@/components/footer/Footer"
import Nav from "@/components/nav/Nav"
import { NAME } from "@/lib/constants"
import Home from "@/views/landing/Home"

const RootPage = () => {
  return (
    <>
      <Head>
        <title>Home - {NAME}</title>
      </Head>
      <Nav />
      <Home />
      <Footer />
    </>
  )
}

export default RootPage
