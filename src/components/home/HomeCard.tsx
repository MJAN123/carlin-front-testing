import Image from "next/image"
import React from "react"
import Button from "src/utils/buttons/Button"
import Animation from "src/utils/elements/Animation"

import { openLink } from "@/api/integration/functions"
import { AnimationType } from "@/lib/types/enums"

const HomeCard = () => {
  return (
    <>
      <div className="flex w-full justify-center bg-blue-dark px-20">
        <div className="relative w-full max-w-screen-2xl overflow-hidden rounded-10 bg-blue-dark p-20 sm:gap-30 sm:p-20 md:gap-40 md:p-40 lg:py-60 xl:py-80">
          <div className="absolute top-0 left-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-60 blur-[220px] filter"></div>
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 transform rounded-full bg-pink-60 blur-[220px] filter"></div>
          <Animation type={AnimationType.Up}>
            <div className="relative flex w-full justify-center">
              <div className="grid w-[550px] max-w-full grid-cols-1 gap-20">
                <div className="flex w-full justify-center">
                  <Image alt="" height={55} src="/img/icon.svg" width={55} />
                </div>
                <div className="w-full text-center text-32 font-bold leading-[110%] text-white md:text-48 xl:text-54">
                  With Carlin{" "}
                  <span className="bg-gradient-to-r from-blue to-pink bg-clip-text text-32 font-bold text-transparent md:text-48 xl:text-54">
                    Everything is Easier
                  </span>
                </div>
                <div className="flex w-full justify-center">
                  <div className="w-[400px] max-w-full text-center text-16 font-medium text-white-60 sm:text-18">
                    Join the best wealth community on the market and gain financial freedom today.
                  </div>
                </div>
                <div className="flex w-full justify-center">
                  <Button handler={(e) => openLink(e, "")} title={"Join Now - $74.99"} />
                </div>
              </div>
            </div>
          </Animation>
        </div>
      </div>
    </>
  )
}

export default HomeCard
