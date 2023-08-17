import React from "react"
import Animation from "src/utils/elements/Animation"

import HomeFeature from "@/components/home/HomeFeature"
import { AnimationType } from "@/lib/types/enums"

const HomeFeatures = () => {
  return (
    <>
      <div className="relative w-full">
        <div
          className="absolute top-1/2 left-0 h-[calc(100vh-80px)] w-full -translate-y-1/2 transform"
          id="features"
        ></div>
        <div className="relative grid w-full grid-cols-1 gap-30 sm:gap-40 md:gap-60">
          <div className="flex w-full justify-center">
            <div className="grid w-[600px] max-w-full grid-cols-1 gap-12 sm:gap-20 md:gap-24">
              <Animation type={AnimationType.Down}>
                <div className="w-full text-center text-32 font-bold leading-[110%] text-white md:text-48 xl:text-60">
                  <span className="bg-gradient-to-r from-blue to-pink bg-clip-text text-32 font-bold text-transparent md:text-48 xl:text-60">
                    Additional features
                  </span>{" "}
                  to help you thrive
                </div>
              </Animation>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-12 sm:gap-20 md:grid-cols-2 md:gap-30 lg:grid-cols-3">
            <HomeFeature
              text={
                "Monitors on insider stock trades, crypto whale transactions, discount flips and more."
              }
              icon={"/img/methods/flash.svg"}
              title={"Custom Monitors"}
              pink
            />
            <HomeFeature
              icon={"/img/methods/chart.svg"}
              text={"From stock picks, crypto calls or sports betting edges, we got you covered."}
              title={"Expert Calls"}
            />
            <HomeFeature
              icon={"/img/methods/settings.svg"}
              text={"Best on the market tools in each wealth generation category."}
              title={"Tools"}
              pink
            />
            <HomeFeature
              icon={"/img/methods/flag.svg"}
              text={"We partner with the best companies to give an edge to our members."}
              title={"Notable Partners"}
            />
            <HomeFeature
              text={
                "Stay motivated with a success oriented community working towards the same goal. "
              }
              icon={"/img/methods/share.svg"}
              title={"Community Channels"}
              pink
            />
            <HomeFeature
              text={
                "Need more clarification and help? We have 1 on 1 ticket support for ALL members."
              }
              icon={"/img/methods/user.svg"}
              title={"24/7 Live Support"}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeFeatures
