import React from "react"

const DashboardSubSubtitle = ({
  title,
  sub
}: {
  title: string
  sub?: string
}) => {
  return (
    <>
      <h3 className="tr-c w-full text-left text-14 font-semibold leading-[125%] text-black md:text-16">
        {title}{" "}
        {sub ? <span className="text-blue text-12 uppercase">{sub}</span> : ""}
      </h3>
    </>
  )
}

export default DashboardSubSubtitle
