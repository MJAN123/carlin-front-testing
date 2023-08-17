import React from "react"
import ButtonScroll from "src/utils/buttons/ButtonScroll"
import Animation from "src/utils/elements/Animation"

import HomeTopCard from "@/components/home/HomeTopCard"
import { AnimationType } from "@/lib/types/enums"

const HomeTop = () => {
  return (
    <>
      <div
        className="relative flex min-h-[100vh] w-full flex-col items-center justify-center overflow-hidden p-20 pt-[110px] sm:p-30 sm:pt-[120px] md:p-40 md:pt-[120px] lg:p-60 lg:pt-[140px]"
        id="/"
      >
        <div className="absolute -top-30 left-1/2 h-60 w-4/5 -translate-x-1/2 transform rounded-full bg-purple-80 blur-[80px] filter"></div>
        <div className="absolute bottom-0 left-1/3 h-[33%] w-[33%] -translate-x-1/2 translate-y-1/2 transform rounded-full bg-purple-80 blur-[100px] filter"></div>
        <div className="absolute bottom-0 left-1/2 h-[33%] w-[33%] -translate-x-1/2 translate-y-1/2 transform rounded-full bg-pink-80 blur-[80px] filter"></div>
        <div className="absolute bottom-0 left-2/3 h-[33%] w-[33%] -translate-x-1/2 translate-y-1/2 transform rounded-full bg-blue-80 blur-[100px] filter"></div>
        <div className="flex w-full max-w-screen-2xl flex-grow flex-wrap items-center gap-40 sm:gap-60 lg:gap-80 xl:gap-[140px]">
          <div className="flex w-full justify-center">
            <div className="grid w-[550px] max-w-full grid-cols-1 gap-20 sm:gap-24">
              <Animation type={AnimationType.Down}>
                <div className="w-full text-center text-32 font-bold text-white sm:text-42 md:text-48 lg:text-54">
                  Making{" "}
                  <span className="bg-gradient-to-r from-[rgba(104,194,255,1)] to-pink bg-clip-text text-32 font-bold text-transparent sm:text-42 md:text-48 lg:text-54">
                    Money
                  </span>{" "}
                  Shouldn&apos;t be Hard.
                </div>
              </Animation>
              <Animation delay={300} type={AnimationType.Down}>
                <div className="w-full text-center text-16 text-white-60 md:text-18">
                  Join the best wealth community on the market and gain financial freedom today.
                </div>
              </Animation>
              <Animation delay={400} type={AnimationType.Up}>
                <div className="flex w-full justify-center">
                  <ButtonScroll id={"wealth"} title={"Join Now - $74.99"} />
                </div>
              </Animation>
            </div>
          </div>
        </div>
        <div className="relative flex w-full justify-center">
          <div className="grid w-full max-w-screen-xl grid-cols-1 gap-20 sm:gap-30 md:gap-40">
            <div className="relative w-full border-b-1 border-white-10">
              <div className="absolute left-1/3 h-2 w-1/3 bg-white"></div>
            </div>
            <div className="grid w-full grid-cols-3 gap-4">
              <HomeTopCard text="Happy Members" title="500+" type={AnimationType.Left} />
              <HomeTopCard text="Combined Experience" title="10+" type={AnimationType.Up} />
              <HomeTopCard text="Member profits" title="$2.5M+" type={AnimationType.Right} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeTop
