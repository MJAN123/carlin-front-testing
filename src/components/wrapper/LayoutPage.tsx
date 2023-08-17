import React from "react"

import Footer from "@/components/footer/Footer"
import Nav from "@/components/nav/Nav"

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <div className="w-full pt-[80px]">
        <div className="flex w-full justify-center gap-10 px-12 pb-12 xs:px-14 xs:pb-14 sm:gap-14 sm:px-20 sm:pb-20 md:gap-20">
          <div className="w-full max-w-screen-2xl">{children}</div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LayoutPage
