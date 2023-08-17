import React from "react"

import DashboardText from "@/components/dashboard/general/DashboardText"

const TableNotFound = ({ title }: { title }) => {
  return (
    <>
      <div className="w-full p-10">
        <DashboardText text={`No ${title} found`} />
      </div>
    </>
  )
}

export default TableNotFound
