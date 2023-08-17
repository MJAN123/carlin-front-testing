import React from "react"

import HomeCard from "@/components/home/HomeCard"
import HomeFaq from "@/components/home/HomeFaq"
import HomeFeatures from "@/components/home/HomeFeatures"
import HomeMethods from "@/components/home/HomeMethods"
import HomeReasons from "@/components/home/HomeReasons"
import HomeTestimonials from "@/components/home/HomeTestimonials"
import HomeTop from "@/components/home/HomeTop"

const Home = () => {
  return (
    <>
      <HomeTop />
      <div
        className="relative flex w-full justify-center overflow-hidden bg-blue-dark px-20 pb-20 sm:px-30 sm:pb-30 md:px-40 md:pb-40 lg:px-60 lg:pb-60"
        id={"wealth"}
      >
        <div className="absolute top-0 bottom-0 hidden w-full max-w-screen-xl">
          <div className="absolute top-0 bottom-0 left-0 border-l-1 border-white-5"></div>
          <div className="absolute left-[20%] top-0 bottom-0 border-l-1 border-white-5"></div>
          <div className="absolute left-[40%] top-0 bottom-0 border-l-1 border-white-5"></div>
          <div className="absolute left-[60%] top-0 bottom-0 border-l-1 border-white-5"></div>
          <div className="absolute left-[80%] top-0 bottom-0 border-l-1 border-white-5"></div>
          <div className="absolute right-0 top-0 bottom-0 border-l-1 border-white-5"></div>
        </div>
        <div className="absolute top-0 left-0 h-[180px] w-full bg-gradient-to-b from-blue-dark to-transparent"></div>
        <div className="absolute bottom-0 left-0 h-[180px] w-full bg-gradient-to-t from-blue-dark to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 h-60 w-4/5 -translate-x-1/2 translate-y-1/2 transform rounded-full bg-purple-80 blur-[80px] filter"></div>
        <div className="absolute bottom-[30%] left-0 h-[400px] w-60 -translate-x-1/2 translate-y-1/2 transform rounded-full bg-purple-80 blur-[80px] filter"></div>
        <div className="absolute bottom-[18%] right-0 h-[300px] w-80 translate-x-1/2 translate-y-1/2 transform rounded-full bg-blue-80 blur-[80px] filter"></div>
        <div className="absolute top-0 left-1/2 h-100 w-4/5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-purple-80 blur-[100px] filter"></div>
        <div className="relative grid w-full max-w-screen-xl grid-cols-1 gap-40 sm:gap-60 md:gap-100 lg:gap-[140px]">
          <HomeMethods />
          <HomeFeatures />
          <HomeReasons />
        </div>
      </div>
      <HomeTestimonials />
      <HomeFaq />
      <HomeCard />
    </>
  )
}

export default Home
