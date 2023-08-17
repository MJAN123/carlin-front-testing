import React from "react"
import Animation from "src/utils/elements/Animation"

import { AnimationType } from "@/lib/types/enums"

const HomeReason = ({
  title,
  text,
  reverse
}: {
  title: string
  text: string
  reverse?: boolean
}) => {
  return (
    <>
      <div className="grid h-full w-full grid-cols-1">
        <div className="grid w-full grid-cols-1 items-center gap-20 sm:gap-30 lg:grid-cols-2 lg:gap-40">
          <div className={`grid w-full grid-cols-1 ${reverse ? "lg:col-start-2" : ""}`}>
            <Animation type={AnimationType.Left}>
              <div className={`grid w-full grid-cols-1 gap-10 ${reverse ? "lg:col-start-2" : ""}`}>
                <div className="w-full text-18 font-bold text-white sm:text-24 md:text-24">
                  {title}
                </div>
                <div className="w-full text-14 text-white-60 sm:text-16 md:text-20">{text}</div>
              </div>
            </Animation>
          </div>
          <div className={`${reverse ? "lg:col-start-1 lg:row-start-1" : ""}`}>
            <Animation type={AnimationType.Right}>
              <div
                className={`rounded-16 bg-blue-dark bg-gradient-to-br from-blue-dark-40 to-blue-10 ${
                  reverse ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div className="grid min-h-[300px] w-full grid-cols-1 gap-12 rounded-16 border-2 border-blue-20 p-24 backdrop-blur-sm backdrop-filter sm:gap-20 sm:p-32 md:p-42"></div>
              </div>
            </Animation>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeReason
