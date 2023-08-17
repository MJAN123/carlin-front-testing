import React from "react"

const DashboardTitle = ({ title }: { title: string }) => {
  return (
    <>
      <h1 className="tr-c w-full text-18 font-bold leading-[125%] text-black sm:text-20 md:text-24">
        {title}
      </h1>
    </>
  )
}

export default DashboardTitle
