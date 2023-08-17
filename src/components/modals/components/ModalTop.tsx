import React from "react"

import ModalTitle from "@/components/modals/components/ModalTitle"

const ModalTop = ({ title }: { title: string }) => {
  return (
    <>
      <div className="grid w-full grid-cols-[auto,1fr] items-center gap-10">
        <div className="bg-blue-20 flex h-24 w-24 items-center justify-center rounded-full border-6">
          <div className="bg-blue h-12 w-12 rounded-full"></div>
        </div>
        <ModalTitle title={title} />
      </div>
    </>
  )
}

export default ModalTop
