import React from "react"
import { TbLetterF } from "react-icons/tb"

const OverlayServer = () => {
  return (
    <>
      <div className="bg-white-med fixed top-0 left-0 flex h-full w-full items-center justify-center overflow-hidden">
        <TbLetterF className="absolute top-20 left-20 w-auto text-40 text-black" />
        <div className="relative text-24 text-black md:text-48 md:text-64">Server Error</div>
      </div>
    </>
  )
}

export default OverlayServer
