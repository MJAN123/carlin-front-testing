import React from "react"
import Animation from "src/utils/elements/Animation"

import HomeMethod from "@/components/home/HomeMethod"
import { AnimationType } from "@/lib/types/enums"

const HomeMethods = () => {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-30 pt-40 sm:gap-40 sm:pt-60 md:gap-60 md:pt-80 lg:pt-100">
        <div className="flex w-full justify-center">
          <div className="grid w-[600px] max-w-full grid-cols-1 gap-12 sm:gap-20 md:gap-24">
            <Animation type={AnimationType.Down}>
              <div className="w-full text-center text-32 font-bold leading-[110%] text-white md:text-48 xl:text-60">
                Premium wealth{" "}
                <span className="bg-gradient-to-r from-blue to-pink bg-clip-text text-32 font-bold text-transparent md:text-48 xl:text-60">
                  creation methods
                </span>
              </div>
            </Animation>
            <Animation type={AnimationType.Down}>
              <div className="w-full text-center text-16 text-white-60 xl:text-18">
                Want to make money online? Our suite of wealth creation methods will take you from
                your 9 - 5 to your dream lifestyle.
              </div>
            </Animation>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-12 sm:gap-20 md:grid-cols-2">
          <HomeMethod
            text={
              "Take your store from 0 to 100 with our resources on product research, site building and marketing."
            }
            icon={"/img/methods/flash.svg"}
            index={0}
            title={"ECommerce"}
            pink
          />
          <HomeMethod
            text={
              "Whether it’s passive investing or day trading we got you covered. Learn how to make your capital work for you. "
            }
            icon={"/img/methods/chart.svg"}
            index={1}
            title={"Stocks / Trading"}
          />
          <HomeMethod
            text={
              "Master the art of influence using your words and use your skill to generate income."
            }
            icon={"/img/methods/share.svg"}
            index={2}
            title={"Copywriting"}
            pink
          />
          <HomeMethod
            text={
              " Capitalize on current trends with daily coin and NFT calls from our full-time analysts. "
            }
            icon={"/img/methods/flag.svg"}
            index={3}
            title={"Crypto / NFTS"}
          />
          <HomeMethod
            text={
              "Learn how to find and source deals with all items -  Sneakers, Cards, Retail Arbitrage and More."
            }
            icon={"/img/methods/settings.svg"}
            index={4}
            title={"Flipping"}
            pink
          />
          <HomeMethod
            icon={"/img/methods/user.svg"}
            index={5}
            text={"Use our edge to go from a fish to a sharp with our sports betting picks."}
            title={"Sports Betting Picks"}
          />
        </div>
      </div>
    </>
  )
}

export default HomeMethods
