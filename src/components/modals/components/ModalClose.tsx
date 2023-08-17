import React from "react"
import { MdClose } from "react-icons/md"

const ModalClose = ({ handler }: { handler: (value: boolean) => void }) => {
  return (
    <>
      <button className="absolute top-[19px] right-[19px]" onClick={() => handler(false)}>
        <MdClose className="text-16" />
      </button>
    </>
  )
}

export default ModalClose
