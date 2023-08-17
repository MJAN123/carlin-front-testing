import React from "react"
import Button from "src/utils/buttons/Button"

import DashboardText from "@/components/dashboard/general/DashboardText"
import ModalBody from "@/components/modals/components/ModalBody"
import ModalClose from "@/components/modals/components/ModalClose"
import ModalTop from "@/components/modals/components/ModalTop"

const ModalConfirm = ({
  handler,
  title,
  handlerSubmit
}: {
  handler: (value: boolean) => void
  title: string
  handlerSubmit: () => void
}) => {
  return (
    <>
      <ModalBody size={400}>
        <ModalClose handler={handler} />
        <ModalTop title={"Confirm"} />
        <DashboardText text={title} />
        <Button
          handler={() => {
            handler(false)
            handlerSubmit()
          }}
          title={"Confirm"}
        />
      </ModalBody>
    </>
  )
}

export default ModalConfirm
