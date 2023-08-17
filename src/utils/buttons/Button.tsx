/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"

const Button = ({ title, handler }: { title: string; handler: any }) => {
  return (
    <>
      <button
        className="rounded-10 bg-gradient-to-r from-blue to-pink py-10 px-24 text-18 text-white"
        onClick={handler}
      >
        {title}
      </button>
    </>
  )
}

export default Button
