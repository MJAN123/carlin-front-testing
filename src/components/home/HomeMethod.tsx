import Image from "next/image"
import React from "react"
import Animation from "src/utils/elements/Animation"

import { AnimationType } from "@/lib/types/enums"

const HomeMethod = ({
  icon,
  title,
  text,
  pink,
  index
}: {
  icon
  title
  text
  pink?: boolean
  index: number
}) => {
  return (
    <>
      <div className="motion grid h-full w-full grid-cols-1">
        <Animation type={index % 2 === 0 ? AnimationType.Left : AnimationType.Right}>
          <div
            className={`h-full rounded-16 bg-blue-dark bg-gradient-to-br from-blue-dark-40 ${
              pink ? "to-pink-10" : "to-blue-10"
            }`}
          >
            <div
              className={`grid h-full w-full grid-cols-1 gap-12 rounded-16 border-2 p-20 backdrop-blur-sm backdrop-filter sm:gap-20 sm:p-32 md:p-42 ${
                pink ? "border-pink-20" : "border-blue-20"
              }`}
            >
              <div
                className={`flex w-full justify-center ${
                  pink ? "first:text-pink" : "first:text-blue"
                }`}
              >
                <div className="md:64 h-48 w-48 md:h-64">
                  <Image alt="" height={64} src={icon} width={64} />
                </div>
              </div>
              <div className="grid w-full grid-cols-1 gap-4">
                <div className="w-full text-center text-20 font-bold text-white sm:text-24 md:text-28">
                  {title}
                </div>
                <div className="w-full text-center text-white-60">{text}</div>
              </div>
            </div>
          </div>
        </Animation>
      </div>
    </>
  )
}

export default HomeMethod
