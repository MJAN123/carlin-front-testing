export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENV ?? ""
export const NAME = "ProperX"
export const SERVER = process.env.NEXT_PUBLIC_SERVER
export const VERSION = process.env.NEXT_PUBLIC_VERSION
export const WEBSITE = process.env.NEXT_PUBLIC_WEBSITE

export const URL = {
  DASHBOARD: {
    BASE: "/"
  },
  ABOUT: "/",
  FAQ: "faq",
  FEATURES: "features",
  HELP: "/",
  HOME: "/",
  PRIVACY: "/",
  TERMS: "/",
  TESTIMONIALS: "testimonials",
  WEALTH: "wealth"
}

export const REQ = {
  CALL: SERVER + "/call"
}

export const SOCIAL = {
  FACEBOOK: "",
  LINKEDIN: "",
  TWITTER: ""
}

export const DATE = {
  DATETIME: "MMM d yyyy, HH:mm",
  SHORT: "MMM d, yyyy"
}
