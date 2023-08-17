import React from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

const LoadingSpinner = ({ color, size }: { color?: string; size?: string }) => {
  return (
    <>
      <AiOutlineLoading3Quarters
        className={`animate-spin ${size ?? "text-20"} ${
          color ? color : "text-black"
        }`}
      />
    </>
  )
}

export default LoadingSpinner
