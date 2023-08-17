import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

import { useProps } from "@/contexts/PropsContext"

const ScrollToTop = () => {
  const { transitioning, setTransitioning } = useProps()
  const { pathname } = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)

    setIsLoading(false)
    setTransitioning(pathname)
  }, [pathname])

  useEffect(() => {
    if (transitioning && transitioning !== pathname) {
      setIsLoading(true)
    } else {
      setTransitioning(pathname)
    }
  }, [transitioning])

  return (
    <>
      {isLoading && (
        <div className="bg-blue-20 fixed top-0 left-0 z-50 h-2 w-full lg:h-4">
          <div className="bg-blue animate-transitioning h-2 lg:h-4"></div>
        </div>
      )}
    </>
  )
}

export default ScrollToTop
