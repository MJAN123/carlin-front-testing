import React, { useState } from "react"

const InputFieldDate = ({
  title,
  placeholder,
  name,
  value,
  handler,
  readOnly
}: {
  title: string
  placeholder: string
  name: string
  value: string
  handler: (value: string) => void
  readOnly?: boolean
}) => {
  const [focus, setFocus] = useState(false)

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4">
        <div
          className={`tr-c text-14 ${focus ? "text-blue" : "text-black-60"}`}
        >
          {title}
        </div>

        <div
          className={`tr-c relative grid h-50 w-full grid-cols-1 items-center rounded-10 border-2 bg-white py-4 px-4 ${
            focus ? "border-blue" : "border-blue-10"
          }`}
        >
          <input
            className="flex h-full w-full items-center rounded-4 px-10 text-14 font-semibold text-black"
            name={name}
            placeholder={placeholder}
            readOnly={readOnly}
            type={"date"}
            value={value}
            onBlur={() => setFocus(false)}
            onChange={(e) => handler(e.target.value)}
            onFocus={() => setFocus(true)}
          />
        </div>
      </div>
    </>
  )
}

export default InputFieldDate
