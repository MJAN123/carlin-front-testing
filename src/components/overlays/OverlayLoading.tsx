import React from "react"
import Logo from "src/utils/elements/Logo"

const OverlayLoading = () => {
  return (
    <>
      <div className="light w-full min-w-[300px]">
        <div className="tr-c fixed top-0 left-0 h-screen w-full bg-blue-dark">
          <div className="bg-blue-4 absolute top-0 left-0 h-full w-full"></div>
        </div>
        <div className="relative w-full">
          <div className="fixed top-0 bottom-0 left-0 flex w-full items-center justify-center">
            <Logo size={100} />
          </div>
        </div>
      </div>
    </>
  )
}

export default OverlayLoading
