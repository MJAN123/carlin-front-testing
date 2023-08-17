import React from "react"

import HomeReason from "@/components/home/HomeReason"

const HomeReasons = () => {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-20 sm:gap-30 lg:gap-40">
        <HomeReason
          text={
            "We’re not your typical wealth group. We focus on providing real value to our members and enabling them with the skills they need to succeed, even AFTER they have left our community. Our team truly aims to help you leave the rat race and build your dream lifestyle."
          }
          title={"Why us?"}
        />
        <HomeReason
          text={
            "Those around you are those who influence you. We strive to build a culture of success within our group to ensure that motivation for all members is at an all time high. Work hard, play hard."
          }
          title={"Motivated Community"}
          reverse
        />
        <HomeReason
          text={
            "Just starting out? No worries. Our group is built to help you grow from the ground up. We give you all the details you need to master each wealth creation method. From in-depth guides to one on one calls we got you covered. "
          }
          title={"Exclusive Education"}
        />
      </div>
    </>
  )
}

export default HomeReasons
