import Head from "next/head"
import React from "react"

import { NAME } from "@/lib/constants"
import NotFound from "@/views/landing/NotFound"

const RootPage = () => {
  return (
    <>
      <Head>
        <title>404 - {NAME}</title>
      </Head>
      <NotFound />
    </>
  )
}

export default RootPage
