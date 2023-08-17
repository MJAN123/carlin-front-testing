import React from "react"

const LoadingBlock = ({ loading }: { loading: boolean }) => {
  return (
    <>
      {loading && (
        <div className="absolute top-0 left-0 h-full w-full overflow-hidden bg-white lg:rounded-6">
          <div className="animate-glow h-full w-full bg-white-10"></div>
        </div>
      )}
    </>
  )
}

export default LoadingBlock
