import React from "react"
import Button from "src/utils/buttons/Button"
import Overlay from "src/utils/elements/Overlay"

import DashboardText from "@/components/dashboard/general/DashboardText"
import DashboardTitle from "@/components/dashboard/general/DashboardTitle"
import { URL } from "@/lib/constants"

const OverlayLanding = () => {
  return (
    <>
      <Overlay>
        <div className="grid w-full grid-cols-1 gap-4">
          <DashboardTitle title={"Welcome!"} />
          <DashboardText text={"To ProperX"} />
        </div>
        <Button handler={URL.HOME} title={"Continue"} />
      </Overlay>
    </>
  )
}

export default OverlayLanding
