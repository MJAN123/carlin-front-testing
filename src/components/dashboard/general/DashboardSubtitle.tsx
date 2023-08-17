import React from "react"

const DashboardSubtitle = ({ title }: { title: string }) => {
  return (
    <>
      <h2 className="tr-c w-full text-16 font-semibold leading-[125%] text-black md:text-18">
        {title}
      </h2>
    </>
  )
}

export default DashboardSubtitle
