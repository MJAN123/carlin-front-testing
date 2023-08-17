import React from "react"

const Wrapper = ({
  children,
  open
}: {
  children: React.ReactNode
  open: boolean
}) => {
  return <>{open ? children : ""}</>
}

export default Wrapper
