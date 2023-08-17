import { useRouter } from "next/router"
import React from "react"
import { Link as LinkScroll } from "react-scroll"

import { LinkInterface } from "@/lib/types/interfaces"

const NavLink = ({ link, handler }: { link: LinkInterface; handler?: (open: boolean) => void }) => {
  const router = useRouter()

  return (
    <LinkScroll
      className={`tr-c inline w-full cursor-pointer items-center gap-12 rounded-6 px-6 py-8 text-center text-16 font-semibold xl:px-10 ${
        router.asPath === link.link ? "text-white" : "text-white-60 hover:text-white"
      }`}
      activeClass="text-white"
      offset={-80}
      to={link.link}
      onClick={() => {
        if (handler) {
          handler(false)
        }
      }}
    >
      {link.title}
    </LinkScroll>
  )
}

export default NavLink
