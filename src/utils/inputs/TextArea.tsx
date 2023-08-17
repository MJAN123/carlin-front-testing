import React, { useState } from "react"

const TextArea = ({
  title,
  placeholder,
  name,
  value,
  handler,
  onEnter
}: {
  title?: string
  placeholder: string
  name: string
  value: string
  handler: (value: string) => void
  onEnter?: () => void
}) => {
  const [focus, setFocus] = useState(false)

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4">
        {!!title && (
          <div
            className={`tr-c text-14 ${focus ? "text-blue" : "text-black-60"}`}
          >
            {title}
          </div>
        )}
        <div
          className={`tr-c relative grid w-full items-center rounded-6 border-2 py-4 px-4 ${
            focus ? "border-blue" : "border-blue-10"
          }`}
        >
          <textarea
            className="flex max-h-[250px] min-h-[60px] w-full items-center rounded-4 px-6 py-4 text-14 font-semibold text-black"
            name={name}
            placeholder={placeholder}
            value={value}
            onKeyDown={(e) => {
              if (e.key === "Enter" && onEnter) {
                e.preventDefault()
                onEnter()
              }
            }}
            onBlur={() => setFocus(false)}
            onChange={(e) => handler(e.target.value)}
            onFocus={() => setFocus(true)}
          ></textarea>
        </div>
      </div>
    </>
  )
}

export default TextArea
