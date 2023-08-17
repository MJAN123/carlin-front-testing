import { ThemeType } from "@/lib/types/enums"

export const getterTheme = (value: string) => {
  return parseInt(value || `${ThemeType.Light}`)
}

export const setterTheme = (handler: Function, theme: number) => {
  handler("theme", theme, { path: "/" })
}

export const getterToken = (value: string) => {
  return value || ""
}

export const setterToken = (handler: Function, token: string) => {
  handler("token", token, { path: "/" })
}
