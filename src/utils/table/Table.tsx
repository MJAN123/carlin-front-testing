import React from "react"
import LoadingState from "src/utils/loading/LoadingState"

const Table = ({
  children,
  columns,
  width,
  loading,
  count
}: {
  children: React.ReactNode
  columns: string[]
  width: number[]
  loading: boolean
  count: number
}) => {
  return (
    <>
      {count > 0 ? (
        <div className="grid w-full grid-cols-1 gap-10 overflow-hidden rounded-10">
          <div className="scrollbar scrollx w-full overflow-auto">
            <div className="flex w-max min-w-full items-center justify-between gap-12 rounded-t-10 border-2 border-black-10 bg-black-10">
              {columns.map((column, key) => (
                <div
                  key={key}
                  className={`text-black-50 flex h-50 items-center px-14 text-14 font-semibold sm:px-20 ${
                    key === columns.length - 1 ? "justify-end" : ""
                  }`}
                  style={{ width: `${width[key]}px` }}
                >
                  {column}
                </div>
              ))}
            </div>
            <div className="w-max min-w-full overflow-hidden rounded-b-10 border-l-2 border-r-2 border-b-2 border-black-10">
              {loading ? (
                <div className="flex h-50 w-full items-center px-14 text-14 text-black sm:px-20">
                  Loading...
                </div>
              ) : (
                children
              )}
            </div>
          </div>
        </div>
      ) : (
        <LoadingState
          loading={loading}
          loadingText={"Loading data"}
          text={"No data found"}
        />
      )}
    </>
  )
}

export default Table
