import React from "react"
import { IoFileTrayStacked } from "react-icons/io5"
import LoadingBlock from "src/utils/loading/LoadingBlock"
import LoadingSpinner from "src/utils/loading/LoadingSpinner"

import DashboardSubSubtitle from "@/components/dashboard/general/DashboardSubSubtitle"
import DashboardText from "@/components/dashboard/general/DashboardText"

const LoadingState = ({
  loading,
  loadingText,
  text,
  icon,
  footer,
  block
}: {
  loading: boolean
  loadingText: string
  text?: string
  icon?: JSX.Element
  footer?: JSX.Element
  block?: boolean
}) => {
  return (
    <>
      <div
        className={`tr-c relative w-full bg-white-10 hover:bg-white-10 ${
          block ? "lg:rounded-6" : "rounded-6"
        }`}
      >
        <LoadingBlock loading={loading} />
        <div className="relative grid w-full grid-cols-1 gap-12 p-12 sm:gap-14 sm:p-14 lg:p-20">
          <div
            className={`grid w-full grid-cols-[auto,1fr] items-start gap-10 sm:gap-14 ${
              footer && !loading ? "hidden lg:grid" : ""
            }`}
          >
            <div className="first:text-blue flex h-38 w-full items-center justify-start">
              {loading ? (
                <LoadingSpinner color="text-blue" size="text-30" />
              ) : icon ? (
                icon
              ) : (
                <IoFileTrayStacked className="text-30" />
              )}
            </div>
            <div className="min-h-38 grid w-full grid-cols-1 gap-2">
              <DashboardSubSubtitle
                title={loading ? "Loading" : "No results"}
              />
              {(loading || text) && (
                <DashboardText text={loading ? loadingText : text} />
              )}
            </div>
          </div>
          {!loading && footer && <div className="w-full">{footer}</div>}
        </div>
      </div>
    </>
  )
}

export default LoadingState
