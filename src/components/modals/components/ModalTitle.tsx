import React from "react"

const ModalTitle = ({ title, back }: { title: string; back?: boolean }) => {
  return (
    <>
      <div
        className={`flex h-30 w-full items-center justify-start pr-38 text-14 font-bold text-black sm:pr-42 sm:text-16 ${
          back ? "pl-38 sm:pl-42" : ""
        }`}
      >
        {title}
      </div>
    </>
  )
}

export default ModalTitle
