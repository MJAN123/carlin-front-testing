import Image from "next/image"
import React from "react"

import { NAME } from "@/lib/constants"

const Logo = ({ size }: { size: number }) => {
  return (
    <>
      <Image
        alt={NAME}
        className=""
        height={size ?? 30}
        src={"/img/logo.svg"}
        width={size ?? 30}
        priority
      />
    </>
  )
}

export default Logo
