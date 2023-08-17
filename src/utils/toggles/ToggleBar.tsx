import React from "react"
import ToggleSquare from "src/utils/toggles/ToggleSquare"

const ToggleBar = ({
  active,
  title,
  text,
  disabled,
  handler
}: {
  active: boolean
  title: string
  text?: string
  disabled?: boolean
  handler: (active: boolean) => void
}) => {
  return (
    <>
      <div
        className={`grid w-full grid-cols-[auto,1fr] items-center gap-8 ${
          disabled ? "opacity-50" : "cursor-pointer"
        }`}
        onClick={() => (disabled ? null : handler(!active))}
      >
        <ToggleSquare active={active} />
        {text ? (
          <div className="grid w-full grid-cols-1">
            <div className="w-full text-14 font-semibold text-black">
              {title}
            </div>
            <div className="text-black-50 w-full text-12 font-semibold">
              {text}
            </div>
          </div>
        ) : (
          <div className="w-full text-14 font-semibold text-black">{title}</div>
        )}
      </div>
    </>
  )
}

export default ToggleBar
