import React from "react"

import { openLink } from "@/api/integration/functions"

const FooterLinkIcon = ({
  icon,
  link
}: {
  icon: JSX.Element
  link: string
}) => {
  return (
    <>
      <button
        className="tr-c flex h-42 w-42 items-center justify-center gap-16 rounded-full border-2 border-white-10 text-white hover:border-white hover:bg-white-20"
        onClick={(e) => openLink(e, link)}
      >
        {icon}
      </button>
    </>
  )
}

export default FooterLinkIcon
