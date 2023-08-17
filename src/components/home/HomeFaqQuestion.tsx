import React, { useEffect, useRef, useState } from "react"
import { RxCaretDown } from "react-icons/rx"

const HomeFaqQuestion = ({ question, answer }: { question: string; answer: string }) => {
  const refQ = useRef<HTMLDivElement>(null)
  const refA = useRef<HTMLDivElement>(null)

  const [heightQ, setHeightQ] = useState(0)
  const [heightA, setHeightA] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (refQ.current) {
        setHeightQ(refQ.current.clientHeight)
      }
      if (refA.current) {
        setHeightA(refA.current.clientHeight)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [refQ, refA])

  useEffect(() => {
    if (refQ.current) {
      setHeightQ(refQ.current.clientHeight)
    }
  }, [refQ])

  useEffect(() => {
    if (refA.current) {
      setHeightA(refA.current.clientHeight)
    }
  }, [refA])

  return (
    <>
      <button
        className={`tr relative w-full overflow-hidden rounded-10 border-2 bg-gradient-to-r from-white-5 to-white-3 ${
          open ? "border-white-40" : "border-white-10"
        }`}
        style={{ height: open ? `${heightQ + heightA + 4}px` : `${heightQ + 4}px` }}
        onClick={() => setOpen(!open)}
      >
        <div
          ref={refQ}
          className="absolute top-0 left-0 grid w-full grid-cols-[1fr,auto] gap-20 py-16 px-20"
        >
          <div className="w-full text-left text-18 font-semibold text-white">{question}</div>
          <RxCaretDown className={`tr transform text-22 text-white ${open ? "rotate-180" : ""}`} />
        </div>
        <div
          ref={refA}
          className="absolute w-full transform px-20 pb-14 text-left text-14 text-white-60 sm:text-16"
          style={{ top: `${heightQ}px` }}
        >
          {answer}
        </div>
      </button>
    </>
  )
}

export default HomeFaqQuestion
