import React, { useMemo, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { IoMdEye, IoMdEyeOff } from "react-icons/io"
import { MdContentCopy } from "react-icons/md"

import { toastSuccess } from "@/api/integration/toaster"

const InputField = ({
  title,
  placeholder,
  name,
  value,
  handler,
  password,
  readOnly,
  regexName,
  copy,
  type,
  min,
  max,
  onEnter
}: {
  title: string
  placeholder: string
  name: string
  value: string | number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler: (value: any) => void
  password?: boolean
  readOnly?: boolean
  regexName?: boolean
  copy?: boolean
  type?: string
  min?: number
  max?: number
  onEnter?: () => void
}) => {
  const [focus, setFocus] = useState(false)
  const [hidden, setHidden] = useState(password)

  const input = useMemo(() => {
    if (type === "number") {
      return isNaN(parseFloat(value as string)) ? "" : value
    }

    return value ?? ""
  }, [value])

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4">
        {title && (
          <div
            className={`tr-c text-14 ${focus ? "text-blue" : "text-black-60"}`}
          >
            {title}
          </div>
        )}
        <div
          className={`tr-c relative grid h-50 w-full items-center rounded-10 border-2 bg-white py-4 ${
            focus ? "border-blue" : "border-black-10"
          } ${
            password || copy
              ? "grid-cols-[1fr,auto] gap-4 px-6"
              : "grid-cols-1 px-6"
          }`}
        >
          <input
            className="flex h-full w-full items-center rounded-4 px-10 text-14 font-semibold text-black"
            max={max}
            min={min}
            name={name}
            placeholder={placeholder}
            readOnly={readOnly}
            type={hidden ? "password" : type ? type : "text"}
            value={input}
            onChange={(e) =>
              handler(
                regexName
                  ? e.target.value.replace(/[^a-z ]/gi, "")
                  : e.target.value
              )
            }
            onKeyDown={(e) => {
              if (e.key === "Enter" && onEnter) {
                e.preventDefault()
                onEnter()
              }
            }}
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
          />
          {password ? (
            <div
              className="hover:bg-blue-10 flex h-32 w-32 cursor-pointer items-center justify-center rounded-4"
              onClick={() => setHidden(!hidden)}
            >
              {hidden ? (
                <IoMdEye className="text-16 text-black" />
              ) : (
                <IoMdEyeOff className="text-16 text-black" />
              )}
            </div>
          ) : (
            ""
          )}
          {copy ? (
            <CopyToClipboard
              text={value.toString()}
              onCopy={() => toastSuccess("Copied")}
            >
              <div className="hover:bg-blue-10 flex h-32 w-32 cursor-pointer items-center justify-center rounded-4">
                <MdContentCopy className="text-16 text-black" />
              </div>
            </CopyToClipboard>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  )
}

export default InputField
