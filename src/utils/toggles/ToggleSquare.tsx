import React from "react"
import { MdCheck } from "react-icons/md"

const ToggleSquare = ({
  active,
  handler
}: {
  active: boolean
  handler?: (active: boolean) => void
}) => {
  return (
    <>
      <button
        className={`tr-c flex h-22 w-22 items-center justify-center rounded-4 border-2 ${
          active ? "border-blue bg-blue" : "border-black-10 hover:bg-black-20"
        }`}
        onClick={() => (handler ? handler(!active) : null)}
      >
        <MdCheck
          className={`tr text-16 text-white ${
            active ? "opacity-1" : "opacity-0"
          }`}
        />
      </button>
    </>
  )
}

export default ToggleSquare
