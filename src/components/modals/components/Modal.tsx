import React, { useEffect, useState } from "react"

import ModalBg from "@/components/modals/components/ModalBg"

const Modal = ({
  children,
  open,
  full,
  handler,
  side
}: {
  children: JSX.Element
  open: boolean
  full?: boolean
  handler: (value: boolean) => void
  side?: boolean
}) => {
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
      handler(false)
      setTimeout(() => {
        setClosing(false)
        setVisible(false)
      }, 180)
    }
  }, [closing])

  return (
    <>
      {visible ? (
        <div
          className={`fixed top-0 left-0 z-50 flex h-screen w-screen min-w-[330px] items-center overflow-hidden ${
            !side && "p-12 sm:p-20"
          }`}
        >
          <div
            className={`flex max-h-full w-full overflow-y-auto rounded-4 ${
              side ? "justify-end" : "justify-center"
            }`}
          >
            <ModalBg
              closing={closing}
              handler={closing || open !== visible ? undefined : (b) => setClosing(!b)}
            />
            <div
              className={`relative z-20 ${closing ? "animate-close" : "animate-open"} ${
                full ? "h-full w-full" : "max-w-full"
              }`}
            >
              {children}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Modal
