import React from "react"
import { Link as LinkScroll } from "react-scroll"

const FooterScrollLink = ({ title, link }: { title: string; link: string }) => {
  console.log(link)
  return (
    <>
      <LinkScroll
        className="w-full cursor-pointer text-14 text-white sm:text-16"
        offset={-80}
        to={link}
      >
        {title}
      </LinkScroll>
    </>
  )
}

export default FooterScrollLink
