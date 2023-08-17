import React from "react"
import Button from "src/utils/buttons/Button"
import Overlay from "src/utils/elements/Overlay"

import DashboardText from "@/components/dashboard/general/DashboardText"
import DashboardTitle from "@/components/dashboard/general/DashboardTitle"
import { URL } from "@/lib/constants"

const OverlayMaintenance = () => {
  return (
    <>
      <Overlay>
        <div className="grid w-full grid-cols-1 gap-4">
          <DashboardTitle title={"Maintenance"} />
          <DashboardText text={"Site is currently undergoing maintenance"} />
        </div>
        <Button handler={URL.HOME} title={"Check our socials"} />
      </Overlay>
    </>
  )
}

export default OverlayMaintenance
