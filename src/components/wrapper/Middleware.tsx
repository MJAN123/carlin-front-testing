import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { URL } from "src/libs/constants"

import OverlayLoading from "@/components/overlays/OverlayLoading"
import { useProps } from "@/contexts/PropsContext"

const urls: string[] = [URL.HOME]

export const nextUrl = (authenticated: boolean, pathname: string) => {
  let next = pathname

  if (!authenticated) {
    next = URL.HOME
  }

  return next
}

export const Middleware = ({ children }: { children: React.ReactNode }) => {
  const { authenticated, loading, route, user } = useProps()

  const router = useRouter()

  const [loadingRoute, setLoadingRoute] = useState(true)

  useEffect(() => {
    if (
      !loading &&
      ((authenticated && user.uid !== undefined) || !authenticated)
    ) {
      onRoute()
    }
  }, [authenticated, loading, router.pathname, user.avatar])

  const onRoute = () => {
    const urlNext = nextUrl(authenticated, router.pathname)

    if (route || urls.some((url) => url.includes(router.pathname))) {
      setLoadingRoute(false)
      return
    }

    console.log("Middleware", authenticated, router.pathname, urlNext)

    if (router.pathname === urlNext) {
      setLoadingRoute(false)
    }
  }

  if (loadingRoute) {
    return (
      <>
        <OverlayLoading />
      </>
    )
  }

  return <>{children}</>
}
