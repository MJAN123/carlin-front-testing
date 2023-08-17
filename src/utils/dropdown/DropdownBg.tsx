import React from "react"

const DropdownBg = ({
  setOpen,
  closing
}: {
  setOpen: (value: boolean) => void
  closing?: boolean
}) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-50 h-full w-full cursor-pointer bg-black-10 backdrop-blur-sm backdrop-filter ${
          closing ? "animate-hide" : "animate-show"
        }`}
        onClick={() => setOpen(false)}
      ></div>
    </>
  )
}

export default DropdownBg
