import React, { useEffect, useRef, useState } from "react"
import { RxCaretLeft } from "react-icons/rx"
import Animation from "src/utils/elements/Animation"

import HomeTestimonial from "@/components/home/HomeTestimonial"
import { AnimationType } from "@/lib/types/enums"

const HomeTestimonials = () => {
  const ref = useRef<HTMLDivElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)

  const [index, setIndex] = useState(2)
  const [count] = useState(3)

  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (width === 0) return

    const handleResize = () => {
      if (ref.current && wrapper.current) {
        setWidth(Math.min(ref.current.clientWidth, wrapper.current.clientWidth))
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [ref, wrapper])

  useEffect(() => {
    if (ref.current && wrapper.current) {
      console.log(ref.current.clientWidth, wrapper.current.clientWidth)

      setWidth(Math.min(Math.max(500, ref.current.clientWidth), wrapper.current.clientWidth))
    }
  }, [ref, wrapper])

  return (
    <>
      <div className="relative flex w-full justify-center overflow-hidden bg-mint p-20 sm:p-30 md:p-40 lg:p-60 xl:py-100">
        <div
          className="absolute top-1/2 left-0 h-[calc(100vh-80px)] w-full -translate-y-1/2 transform"
          id="testimonials"
        ></div>
        <div className="relative grid w-full max-w-screen-xl grid-cols-1 gap-20 sm:gap-30 md:gap-40 lg:gap-50 xl:gap-60">
          <div className="grid w-full grid-cols-1 gap-20 lg:grid-cols-[1fr,auto]">
            <div className="flex w-full justify-start">
              <div className="grid w-[550px] max-w-full grid-cols-1 gap-12 sm:gap-20 md:gap-24">
                <div className="w-full text-left text-24 font-bold leading-[110%] text-blue-dark sm:text-42 md:text-48">
                  See what our{" "}
                  <span className="bg-gradient-to-r from-blue to-pink bg-clip-text text-24 font-bold text-transparent sm:text-42 md:text-48">
                    members
                  </span>{" "}
                  have to say
                </div>
              </div>
            </div>
            <div className="flex items-center gap-12 md:gap-24">
              <button
                className="tr-c group flex h-64 w-64 items-center justify-center rounded-full border-2 border-blue-dark-10 bg-white hover:bg-blue-10"
                onClick={() => setIndex((index + 1) % count)}
              >
                <RxCaretLeft className="tr-c text-24 text-blue-dark-60 group-hover:text-blue-dark" />
              </button>
              <button
                className="tr-c group flex h-64 w-64 items-center justify-center rounded-full border-2 border-blue-dark-10 bg-white hover:bg-blue-10"
                onClick={() => setIndex((index - 1 + count) % count)}
              >
                <RxCaretLeft className="tr-c rotate-180 transform text-24 text-blue-dark-60 group-hover:text-blue-dark" />
              </button>
            </div>
          </div>
          <div className="motion grid h-full w-full grid-cols-1">
            <Animation type={AnimationType.Up}>
              <div ref={wrapper} className="w-full">
                <div
                  style={{
                    transform: `translateX(-${width * (count - index - 1)}px)`
                  }}
                  className="tr grid w-max transform grid-cols-[auto,auto,auto]"
                >
                  <div
                    ref={ref}
                    style={{
                      maxWidth: `${width}px`
                    }}
                    className="w-[500px] pr-20"
                  >
                    <HomeTestimonial
                      text={
                        "Carlin has really opened my eyes to the endless possibilities of generating wealth online. I can honestly say that I have learnt so much over the past few months I’ve been with the group. As long as you are motivated and strive to work hard, I guarantee that Carlin’s resources will help you get to where you want to be."
                      }
                      author={"Hopeless"}
                      image={""}
                      role={"Community member"}
                      title={"Value for money"}
                    />
                  </div>
                  <div
                    style={{
                      maxWidth: `${width}px`
                    }}
                    className="w-[500px] pr-20"
                  >
                    <HomeTestimonial
                      text={
                        "I’ve tried many other groups before, but Carlin is second to none in terms of how in-depth their resources are and how easy it is to learn. They really help you take the first step to start making money online and they will answer any questions that pop up during the process. If any beginners are wanting to achieve financial freedom but don’t know where to start, Carlin is truly the right group for you."
                      }
                      author={"gmorgan"}
                      image={""}
                      role={"Community member"}
                      title={"Beginner Friendly"}
                    />
                  </div>
                  <div
                    style={{
                      maxWidth: `${width}px`
                    }}
                    className="w-[500px]"
                  >
                    <HomeTestimonial
                      text={
                        "The staff within Carlin are extremely invested in your success and do all that they can to help you succeed. Whenever I’ve had something that I was unsure about, they have always done their best to help me out. The community within Carlin is special as well. I always feel motivated to work when I’m surrounded by all these other hustlers and we all help each other out."
                      }
                      author={"Hopeless"}
                      image={""}
                      role={"Community member"}
                      title={"Motivated Community and Staff"}
                    />
                  </div>
                </div>
              </div>
            </Animation>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeTestimonials
