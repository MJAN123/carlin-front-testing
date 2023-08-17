import React from "react"

const ModalBg = ({
  handler,
  closing
}: {
  handler?: (value: boolean) => void
  closing?: boolean
}) => {
  return (
    <>
      <button
        className={`fixed top-0 left-0 z-10 h-full w-screen min-w-[330px] bg-black-10 backdrop-blur-sm backdrop-filter ${
          closing ? "animate-hide" : "animate-show"
        }`}
        onClick={handler ? () => handler(false) : null}
      ></button>
    </>
  )
}

export default ModalBg
