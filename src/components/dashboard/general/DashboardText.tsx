import React from "react"

const DashboardText = ({ text }: { text: string }) => {
  return (
    <>
      <p className="tr-c w-full break-words text-14 leading-[125%] text-black-60">
        {text}
      </p>
    </>
  )
}

export default DashboardText
