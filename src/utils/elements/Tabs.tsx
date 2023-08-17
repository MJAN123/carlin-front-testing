import React, { useEffect, useState } from "react"
import { MdKeyboardArrowDown, MdLibraryAddCheck } from "react-icons/md"
import DropdownBg from "src/utils/dropdown/DropdownBg"

import { RippleLight } from "@/api/integration/ripples"
import { TabInterface } from "@/lib/types/interfaces"

const Tabs = ({
  tabs,
  active,
  small,
  handler
}: {
  tabs: TabInterface[]
  active: TabInterface
  small?: boolean
  handler?: (tab: TabInterface) => void
}) => {
  const [open, setOpen] = useState(false)

  const [closing, setClosing] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    if (open) {
      setVisible(true)
    } else {
      setClosing(true)
      setTimeout(() => {
        setClosing(false)
        setVisible(false)
      }, 180)
    }
  }, [open])

  useEffect(() => {
    if (closing) {
      setOpen(false)
      setTimeout(() => {
        setClosing(false)
        setVisible(false)
      }, 180)
    }
  }, [closing])

  return (
    <>
      <div className="relative w-full">
        {visible && (
          <div className="lg:hidden">
            <DropdownBg closing={closing} setOpen={setOpen} />
          </div>
        )}
        <button
          className={`tr-c tr-c group grid w-full grid-cols-1 gap-6 bg-white hover:bg-black-10 lg:hidden ${
            visible ? "relative z-50 lg:z-0" : ""
          }`}
        >
          <RippleLight>
            <div
              className="tr-c grid h-38 w-full grid-cols-[1fr,auto] items-center gap-6 border-b-2 border-black py-6 pl-10 pr-12"
              onClick={() => setOpen(!open)}
            >
              <div className="flex items-center justify-start gap-6">
                {active.icon && (
                  <div className="tr-c text-blue flex h-16 w-16 items-center justify-center">
                    {active ? active.icon : <MdLibraryAddCheck />}
                  </div>
                )}
                <p className="tr-c text-14 font-bold capitalize text-black">
                  {active ? active.title : "Select"}
                </p>
              </div>
              <MdKeyboardArrowDown
                className={`tr transform text-18 text-black ${
                  open ? "rotate-180" : ""
                }`}
              />
            </div>
          </RippleLight>
        </button>
        <div
          className={`tr-c absolute top-42 grid min-w-[170px] grid-cols-1 gap-6 border-b-1 border-black-20 bg-white p-6 lg:relative lg:top-0 lg:flex lg:flex-wrap lg:items-center lg:justify-start lg:bg-transparent lg:p-0 ${
            small ? "w-full sm:w-auto lg:w-full" : "w-full"
          } ${
            closing
              ? "animate-hide lg:animate-none"
              : "animate-show lg:animate-none"
          } ${visible ? "z-50" : "hidden lg:block"}`}
        >
          {tabs.map((tab, key) => (
            <div
              key={key}
              className="tr-c grid w-full grid-cols-1 rounded-6 bg-white lg:w-auto"
            >
              <RippleLight>
                <button
                  className={`tr-c group flex h-34 w-full items-center justify-start gap-6 border-b-2 py-6 px-10 lg:justify-center ${
                    active === tab
                      ? "border-black bg-black-10 hover:bg-black-20"
                      : "border-transparent hover:border-black hover:bg-black-10"
                  }`}
                  onClick={() => {
                    if (tab.type !== undefined && handler) handler(tab)
                    setOpen(false)
                  }}
                >
                  {tab.icon && (
                    <div
                      className={`tr-c flex h-16 w-16 items-center justify-center ${
                        active === tab
                          ? "text-blue"
                          : "group-hover:text-blue text-black-60"
                      }`}
                    >
                      {tab.icon}
                    </div>
                  )}
                  {tab.title ? (
                    <p
                      className={`tr-c text-14 font-bold capitalize ${
                        active === tab
                          ? "text-black"
                          : "text-black-60 group-hover:text-black"
                      }`}
                    >
                      {tab.title}
                    </p>
                  ) : (
                    ""
                  )}
                </button>
              </RippleLight>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Tabs
