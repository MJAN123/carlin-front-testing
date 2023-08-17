import React from "react"

const ToastWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full overflow-hidden rounded-4">{children}</div>
    </>
  )
}

export default ToastWrapper
