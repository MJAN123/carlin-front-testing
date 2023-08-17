import React, { useState } from "react"

const InputFieldTime = ({
  title,
  placeholder,
  name,
  value,
  handler,
  readOnly,
  regexName
}: {
  title: string
  placeholder: string
  name: string
  value: string | number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler: (value: any) => void
  readOnly?: boolean
  regexName?: boolean
}) => {
  const [focus, setFocus] = useState(false)

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4">
        {title && (
          <div className={`tr-c text-14 ${focus ? "text-blue" : "text-black-60"}`}>{title}</div>
        )}
        <div
          className={`tr-c relative grid h-50 w-full items-center rounded-10 border-2 bg-white py-4 ${
            focus ? "border-blue" : "border-black-10"
          }`}
        >
          <input
            className="flex h-full w-full items-center rounded-4 px-14 text-14 font-semibold text-black"
            name={name}
            placeholder={placeholder}
            readOnly={readOnly}
            type={"time"}
            value={value}
            onChange={(e) =>
              handler(regexName ? e.target.value.replace(/[^a-z ]/gi, "") : e.target.value)
            }
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
          />
        </div>
      </div>
    </>
  )
}

export default InputFieldTime
