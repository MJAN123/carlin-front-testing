import React from "react"

const Overlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="to-blue-20 fixed top-0 bottom-0 left-0 flex w-full items-center bg-gradient-to-tr from-transparent"></div>
      <div className="flex h-[100vh] w-full min-w-[330px] items-center justify-center bg-white p-12 sm:p-20">
        <div className="grid w-[300px] grid-cols-1 gap-20">{children}</div>
      </div>
    </>
  )
}

export default Overlay
