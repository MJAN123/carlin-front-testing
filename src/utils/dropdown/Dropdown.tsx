import React, { useState } from "react"
import { FaCaretDown } from "react-icons/fa"

import { capitalizeString } from "@/api/integration/functions"
import { RippleLight } from "@/api/integration/ripples"

const Dropdown = ({
  title,
  placeholder,
  options,
  option,
  handler
}: {
  title: string
  placeholder: string
  options: string[]
  option: string
  handler: (value: string) => void
}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4">
        <div className={`tr-c text-14 ${open ? "text-blue" : "text-black-60"}`}>
          {title}
        </div>
        <div className="relative w-full">
          <div className="relative grid w-full grid-cols-1 overflow-hidden rounded-10">
            <RippleLight>
              <button
                className={`tr-c relative grid h-50 w-full grid-cols-[1fr,auto] items-center rounded-10 border-2 bg-white py-4 pl-16 pr-6 ${
                  open ? "border-blue" : "border-black-10"
                }`}
                onClick={() => setOpen(!open)}
              >
                <div className="w-full text-left text-14 font-semibold text-black">
                  {option ? capitalizeString(option) : placeholder}
                </div>
                <div className="flex h-34 w-34 items-center justify-center">
                  <FaCaretDown
                    className={`tr transform ${
                      open ? "text-blue rotate-180" : "text-blue-40"
                    }`}
                  />
                </div>
              </button>
            </RippleLight>
          </div>
          {open && (
            <div className="border-blue-10 absolute top-56 left-0 z-10 w-full overflow-hidden rounded-10 border-2 bg-white">
              <div className="scrollbar max-h-[240px] w-full overflow-auto rounded-6 p-6">
                <div className="grid w-full grid-cols-1 gap-4">
                  {options.map((o, key) => (
                    <button
                      key={key}
                      className={`tr-c w-full rounded-4 px-10 py-4 text-left text-14 font-semibold text-black hover:bg-black-10 ${
                        option === o
                          ? "bg-black-10 text-black"
                          : "text-black-80 hover:text-black"
                      }`}
                      onClick={() => {
                        handler(o)
                        setOpen(false)
                      }}
                    >
                      {capitalizeString(o)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Dropdown
