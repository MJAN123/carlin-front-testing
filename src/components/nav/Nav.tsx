import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import { Link as LinkScroll } from "react-scroll"

import NavLink from "@/components/nav/NavLink"
import { URL } from "@/lib/constants"
import { LinkInterface } from "@/lib/types/interfaces"

const Nav = () => {
  const [topNav, setTopNav] = useState<boolean>(true)
  const [openNav, setOpenNav] = useState<boolean>(false)

  const [links] = useState<LinkInterface[]>([
    { title: "Home", link: URL.HOME },
    { title: "Features", link: URL.FEATURES },
    { title: "Testimonials", link: URL.TESTIMONIALS },
    { title: "FAQ", link: URL.FAQ }
  ])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setTopNav(false)
      } else {
        setTopNav(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div
        className={`tr-c fixed top-0 left-0 right-0 z-20 flex w-full justify-center px-12 xs:px-14 sm:px-20 ${
          topNav && !openNav ? "" : "bg-blue-dark"
        }`}
      >
        <div className="relative flex h-80 w-full max-w-screen-2xl items-center justify-between gap-20">
          <Link className="flex items-center gap-10" href={URL.HOME}>
            <Image alt={"Logo"} height={42} src={"/img/logo.svg"} width={131} />
          </Link>
          <div className="hidden grid-cols-[auto,auto,auto,auto] items-center gap-8 lg:grid">
            {links.map((link: LinkInterface) => (
              <NavLink key={link.link} link={link} />
            ))}
          </div>
          <LinkScroll
            className="tr-c hidden h-42 cursor-pointer items-center justify-center rounded-8 border-2 border-white-10 bg-gradient-to-r from-white-5 to-transparent px-20 text-white hover:border-white-20 lg:flex"
            offset={-80}
            to={URL.WEALTH}
          >
            Dashboard
          </LinkScroll>
          <button
            className={`tr-c group flex h-50 w-50 items-center justify-center rounded-full border-2 border-white-10 lg:hidden ${
              openNav ? "bg-white" : "bg-white-5 hover:bg-white"
            }`}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <MdClose
                className={`text-24 ${
                  openNav ? "text-blue-dark" : "text-white group-hover:text-blue-dark"
                }`}
              />
            ) : (
              <FaBars
                className={`text-20 ${
                  openNav ? "text-blue-dark" : "text-white group-hover:text-blue-dark"
                }`}
              />
            )}
          </button>
        </div>
      </div>
      <div
        className={`tr fixed top-80 bottom-0 left-0 right-0 z-20 w-full overflow-hidden bg-blue-dark p-12 xs:p-14 sm:p-20 lg:hidden ${
          openNav ? "h-[calc(100vh-80px)] opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 items-center gap-8">
          {links.map((link: LinkInterface) => (
            <NavLink key={link.link} handler={setOpenNav} link={link} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Nav
