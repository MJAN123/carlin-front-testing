import { useRouter } from "next/router"
import React from "react"
import Button from "src/utils/buttons/Button"
import Overlay from "src/utils/elements/Overlay"

import DashboardText from "@/components/dashboard/general/DashboardText"
import DashboardTitle from "@/components/dashboard/general/DashboardTitle"

const NotFound = () => {
  const router = useRouter()

  return (
    <>
      <Overlay>
        <div className="grid w-full grid-cols-1 gap-4">
          <DashboardTitle title={"Page not found"} />
          <DashboardText
            text={"We cannot seem to find the page you are looking for"}
          />
        </div>
        <Button handler={() => router.back()} title={"Back"} />
      </Overlay>
    </>
  )
}

export default NotFound
