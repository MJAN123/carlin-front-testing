import Image from "next/image"
import React from "react"
import Animation from "src/utils/elements/Animation"

import { AnimationType } from "@/lib/types/enums"

const HomeFeature = ({ icon, title, text, pink }: { icon; title; text; pink?: boolean }) => {
  return (
    <>
      <div className="motion grid h-full w-full grid-cols-1">
        <Animation type={AnimationType.Up}>
          <div className="grid h-full w-full grid-cols-1 gap-12 p-10 sm:gap-20">
            <div
              className={`flex w-full justify-center ${
                pink ? "first:text-pink" : "first:text-blue"
              }`}
            >
              <div
                className={`flex h-64 w-64 items-center justify-center rounded-full xl:h-96 xl:w-96 ${
                  pink ? "bg-pink-10" : "bg-blue-10"
                }`}
              >
                <div className="h-32 w-32 xl:h-48 xl:w-48">
                  <Image alt="" height={48} src={icon} width={48} />
                </div>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-4">
              <div className="w-full text-center text-20 font-bold text-white sm:text-24 md:text-28">
                {title}
              </div>
              <div className="w-full text-center text-white-60">{text}</div>
            </div>
          </div>
        </Animation>
      </div>
    </>
  )
}

export default HomeFeature
