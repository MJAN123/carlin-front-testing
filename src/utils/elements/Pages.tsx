import React from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

const Pages = ({
  count,
  page,
  pages,
  perPage,
  handler
}: {
  count: number
  page: number
  pages: number
  perPage: number
  handler: Function
}) => {
  return (
    <>
      {pages > 1 && (
        <div className="grid w-full grid-cols-[auto,1fr,auto] gap-16">
          <button
            className={`tr-c group flex h-40 w-40 items-center justify-center rounded-10 ${
              page <= 1 ? "bg-black-10" : "bg-blue-20 hover:bg-blue-40"
            }`}
            onClick={() => (page > 1 ? handler((p) => p - 1) : null)}
          >
            <MdKeyboardArrowLeft
              className={`tr-c text-20 ${
                page <= 1 ? "text-black-50" : "text-blue"
              }`}
            />
          </button>
          <div className="flex w-full items-center justify-between gap-12">
            <div className="text-14 font-semibold text-black">
              Page: {page} of {pages}
            </div>
            <div className="text-14 font-semibold text-black">
              Results: {page * perPage - perPage + 1} -{" "}
              {Math.min(page * perPage, count)} of {count}
            </div>
          </div>
          <button
            className={`tr-c group flex h-40 w-40 items-center justify-center rounded-10 ${
              page >= pages ? "bg-black-4" : "bg-blue-20 hover:bg-blue-40"
            }`}
            onClick={() => (page < pages ? handler((p) => p + 1) : null)}
          >
            <MdKeyboardArrowRight
              className={`tr-c text-20 ${
                page >= pages ? "text-black-50" : "text-blue"
              }`}
            />
          </button>
        </div>
      )}
    </>
  )
}

export default Pages
