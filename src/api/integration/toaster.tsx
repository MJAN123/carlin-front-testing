import React from "react"
import { toast } from "react-toastify"

import ToastNotification from "@/components/toaster/ToastNotification"
import { NotificationType } from "@/lib/types/enums"

export const toastError = (message: string) => {
  return toast.error(
    <ToastNotification
      message={message}
      title={"Error"}
      type={NotificationType.Error}
    />
  )
}

export const toastInfo = (message: string) => {
  return toast.info(
    <ToastNotification
      message={message}
      title={"Info"}
      type={NotificationType.Info}
    />
  )
}

export const toastSuccess = (message: string) => {
  return toast.success(
    <ToastNotification
      message={message}
      title={"Success"}
      type={NotificationType.Success}
    />
  )
}

export const toastSystem = (title: string, message: string) => {
  return toast.info(
    <ToastNotification
      message={message}
      title={title}
      type={NotificationType.System}
    />
  )
}

export const toastWarning = (message: string) => {
  return toast.warning(
    <ToastNotification
      message={message}
      title={"Warning"}
      type={NotificationType.Warning}
    />
  )
}
