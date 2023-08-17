import React from "react"

const TableRow = ({
  children,
  border,
  handler
}: {
  children: React.ReactNode
  border: boolean
  handler?: () => void
}) => {
  return (
    <>
      <div
        className={`tr-c flex h-50 w-max min-w-full cursor-pointer items-center justify-between gap-12 hover:bg-black-10 ${
          border ? "border-blue-10 border-b-1" : "pb-0"
        }`}
        onClick={handler ? handler : () => null}
      >
        {children}
      </div>
    </>
  )
}

export default TableRow
