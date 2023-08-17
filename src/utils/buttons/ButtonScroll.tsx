/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
// import { Link as LinkScroll } from "react-scroll"

const ButtonScroll = ({ title }: { title: string; id?: any }) => {
  return (
    <>
      <button
        className="rounded-10 bg-gradient-to-r from-blue to-pink py-10 px-24 text-18 text-white"
        // offset={-80}
        // to={id}
      >
        {title}
      </button>
    </>
  )
}

export default ButtonScroll
