import React from "react"

const ModalBody = ({
  children,
  size
}: {
  children: React.ReactNode
  size?: number
}) => {
  return (
    <>
      <div
        className="grid max-w-full grid-cols-1 gap-14 rounded-6 bg-white p-16 sm:gap-20 sm:rounded-12 sm:p-24"
        style={{ width: `${Math.max(300, size ?? 0)}px` }}
      >
        {children}
      </div>
    </>
  )
}

export default ModalBody
