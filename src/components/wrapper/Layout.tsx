import React from "react"
import ScrollToTop from "src/utils/global/ScrollToTop"

import Toaster from "@/components/toaster/Toaster"
import { Middleware } from "@/components/wrapper/Middleware"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Middleware>
        <div className={`light w-full min-w-[330px]`}>
          <div className="tr-c fixed top-0 left-0 h-screen w-full bg-blue-dark"></div>
          <div className="relative w-full">
            {children}
            <ScrollToTop />
            <Toaster />
          </div>
        </div>
      </Middleware>
    </>
  )
}

export default Layout
