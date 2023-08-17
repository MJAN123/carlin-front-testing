import Image from "next/image"
import React from "react"
import { MdPerson } from "react-icons/md"

const HomeTestimonial = ({
  title,
  text,
  author,
  role,
  image
}: {
  title: string
  text: string
  author: string
  role: string
  image: string
}) => {
  return (
    <>
      <div className="flex h-full w-full flex-col rounded-10 border-1 border-blue-dark-10 bg-white p-20 sm:p-24 md:p-32">
        <div className="mb-4 w-full text-16 font-semibold text-blue-dark sm:text-18">{title}</div>
        <div className="flex w-full flex-grow text-14 text-blue-dark-60">{text}</div>
        <div className="my-18 w-full border-b-1 border-blue-dark-10 sm:my-20 md:my-24"></div>
        <div className="grid w-full grid-cols-[auto,1fr] items-center gap-16">
          <div className="flex h-64 w-64 items-center justify-center rounded-full bg-blue-10">
            {image ? (
              <Image alt={""} height={64} src={image} width={64} />
            ) : (
              <MdPerson className="text-18 text-blue sm:text-24" />
            )}
          </div>
          <div className="grid w-full grid-cols-1">
            <div className="w-full text-16 font-semibold text-blue-dark md:text-18">{author}</div>
            <div className="text-14 text-blue-dark-60">{role}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeTestimonial
