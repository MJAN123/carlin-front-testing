import Link from "next/link"
import React from "react"

const FooterLink = ({ title, link }: { title: string; link: string }) => {
  return (
    <>
      <Link className="w-full text-14 text-white sm:text-16" href={link}>
        {title}
      </Link>
    </>
  )
}

export default FooterLink
