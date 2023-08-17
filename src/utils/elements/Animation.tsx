import React, { useEffect, useRef, useState } from "react"

import { AnimationType } from "@/lib/types/enums"

const Animation = ({
  delay,
  type,
  children
}: {
  delay?: number
  type: AnimationType
  children: React.ReactNode
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const [inFrame, setInFrame] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top
        const bottom = ref.current.getBoundingClientRect().bottom

        if (top < window.innerHeight && bottom > 0) {
          setInFrame(true)
        } else {
          setInFrame(false)
        }
      }
    }

    onScroll()

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  console.log(delay, type, inFrame)
  return (
    <>
      <div
        ref={ref}
        style={
          {
            // transform: inFrame
            //   ? "translateY(0)"
            //   : type === AnimationType.Fade
            //   ? "translateY(20px)"
            //   : type === AnimationType.Down
            //   ? "translateY(40px)"
            //   : type === AnimationType.Right
            //   ? "translateX(40px)"
            //   : type === AnimationType.Up
            //   ? "translateY(-40px)"
            //   : type === AnimationType.Left
            //   ? "translateX(-40px)"
            //   : "translateY(0)",
            // opacity: inFrame ? 1 : 0,
            // transitionDelay: `${delay}ms`
          }
        }
        className="tr-600 w-full"
      >
        {children}
      </div>
    </>
  )
}

export default Animation
