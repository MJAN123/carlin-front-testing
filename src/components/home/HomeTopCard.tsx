import React from "react"
import Animation from "src/utils/elements/Animation"

import { AnimationType } from "@/lib/types/enums"

const HomeTopCard = ({
  title,
  text,
  type
}: {
  title: string
  text: string
  type: AnimationType
}) => {
  return (
    <>
      <div className="grid h-full w-full grid-cols-1">
        <Animation delay={500} type={type}>
          <div className="grid w-full grid-cols-1 gap-4 p-12">
            <div className="w-full text-center text-24 font-bold text-white sm:text-32 md:text-48 xl:text-60">
              {title}
            </div>
            <div className="text-semibold w-full text-center text-12 text-white-60 sm:text-14 md:text-16 xl:text-18">
              {text}
            </div>
          </div>
        </Animation>
      </div>
    </>
  )
}

export default HomeTopCard
