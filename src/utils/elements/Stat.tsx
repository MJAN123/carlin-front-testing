import React from "react"

import DashboardSubSubtitle from "@/components/dashboard/general/DashboardSubSubtitle"
import DashboardText from "@/components/dashboard/general/DashboardText"

const Stat = ({ text, title }: { text: string; title: string }) => {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4">
        <DashboardText text={text} />
        <DashboardSubSubtitle title={title} />
      </div>
    </>
  )
}

export default Stat
