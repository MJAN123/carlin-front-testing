/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { Link as LinkScroll } from "react-scroll"

const ButtonScroll = ({ title, id }: { title: string; id: any }) => {
  return (
    <>
      <LinkScroll
        className="rounded-10 bg-gradient-to-r from-blue to-pink py-10 px-24 text-18 text-white"
        offset={-80}
        to={id}
      >
        {title}
      </LinkScroll>
    </>
  )
}

export default ButtonScroll
