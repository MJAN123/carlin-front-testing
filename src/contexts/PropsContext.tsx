import Cookies from "js-cookie"
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react"
import { useCookies } from "react-cookie"

import { getterTheme, setterTheme } from "@/api/integration/cookies"
import OverlayLoading from "@/components/overlays/OverlayLoading"
import OverlayMaintenance from "@/components/overlays/OverlayMaintenance"
import { ENVIRONMENT } from "@/lib/constants"
import { sampleUser } from "@/lib/data/samples"
import { ThemeType } from "@/lib/types/enums"
import { UserInterface } from "@/lib/types/interfaces"

type PropsContextType = {
  authenticated: boolean
  loading: boolean
  route: boolean
  theme: number
  token: string
  transitioning: string
  uid: string
  user: UserInterface
  setTheme: (theme: number) => void
  setToken: (token: string) => void
  setTransitioning: (transitioning: string) => void
  setUser: (user: UserInterface) => void
  onReset: () => void
}

export const PropsContext = createContext<PropsContextType>({
  authenticated: false,
  loading: false,
  route: false,
  theme: parseInt(Cookies.get("theme") ?? "1"),
  token: "",
  transitioning: "",
  uid: "",
  user: sampleUser,
  setTheme: () => {},
  setToken: () => {},
  setTransitioning: () => {},
  setUser: () => {},
  onReset: () => {}
})

export const PropsProvider = ({ children }: { children: React.ReactNode }) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "theme",
    "theme_system",
    "token",
    "uid",
    "user"
  ])

  const [loading, setLoading] = useState(true)
  const [route] = useState(parseInt(ENVIRONMENT ?? "") ? true : false)
  const [theme, setTheme] = useState(getterTheme(cookies.theme))
  const [token, setToken] = useState<string>(cookies.token ?? "")
  const [transitioning, setTransitioning] = useState<string>("")
  const [user, setUser] = useState<UserInterface>(sampleUser)

  const authenticated = useMemo(
    () => (token && user.uid ? true : false),
    [token, user]
  )
  const uid = useMemo(() => user.uid ?? "", [user])

  useEffect(() => {
    if (authenticated) {
      setLoading(false)
    }
  }, [authenticated])

  useEffect(() => {
    if (loading) {
      onLoad()
    }
  }, [loading])

  useEffect(() => {
    setterTheme(setCookie, theme)
  }, [theme])

  const onLoad = () => {
    setToken("1")
    setUser({
      address: {
        city: "Amsterdam",
        country: "Netherlands",
        street: "Amstel 1",
        zipCode: "1011AA"
      },
      avatar: "",
      birthDate: "1990-01-01",
      email: "a@a.com",
      phoneNo: "+31612345678",
      type: "user",
      uid: "1",
      username: "Martijn"
    })

    setLoading(false)
  }

  const onReset = () => {
    removeCookie("uid")
    removeCookie("user")
    removeCookie("theme", { path: "/" })
    removeCookie("theme_system", { path: "/" })
  }

  const obj = useMemo(
    () => ({
      authenticated,
      loading,
      route,
      theme,
      token,
      transitioning,
      uid,
      user,
      setTheme,
      setToken,
      setTransitioning,
      setUser,
      onReset
    }),
    [
      authenticated,
      loading,
      route,
      theme,
      token,
      transitioning,
      uid,
      user,
      setTheme,
      setToken,
      setTransitioning,
      setUser,
      onReset
    ]
  )

  if (ENVIRONMENT === "maintenance") {
    return (
      <div
        className={`w-full min-w-[330px] ${
          theme === ThemeType.Dark ? "dark" : "light"
        }`}
      >
        <OverlayMaintenance />
      </div>
    )
  }

  if (loading) {
    return (
      <div
        className={`w-full min-w-[330px] ${
          theme === ThemeType.Dark ? "dark" : "light"
        }`}
      >
        <OverlayLoading />
      </div>
    )
  }

  return (
    <>
      <PropsContext.Provider value={obj}>{children}</PropsContext.Provider>
    </>
  )
}

export const useProps = () => useContext(PropsContext)
