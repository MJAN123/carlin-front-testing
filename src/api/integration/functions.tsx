export const capitalizeString = (text: string) => {
  return text && text.length > 2
    ? text.charAt(0).toUpperCase() + text.slice(1)
    : ""
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const openLink = (event: any, link: string) => {
  event.preventDefault()
  window.open(link)
}
