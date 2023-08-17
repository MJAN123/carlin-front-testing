import React from "react"

const DashboardLine = ({ white, fit }: { white?: boolean; fit?: boolean }) => {
  return (
    <>
      <div
        className={`tr-c w-full border-b-1 ${fit ? "hidden lg:block" : ""} ${
          white ? "border-white-20" : "border-blue-10"
        }`}
      ></div>
    </>
  )
}

export default DashboardLine
