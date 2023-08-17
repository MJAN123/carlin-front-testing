export interface BooleanInterface {
  title: string
  selected: boolean
}

export interface LinkInterface {
  title: string
  link: string
  icon?: JSX.Element
  iconWhite?: JSX.Element
}

export interface PropsInterface {
  admin: boolean
  authenticated: boolean
  path: string
  user: UserInterface
}

export interface TabInterface {
  title: string
  icon?: JSX.Element
  url?: string
  type?: number
}

export interface TitleInterface {
  title: string
  text: string
  icon?: JSX.Element
}

export interface UserInterface {
  address: {
    city: string
    country: string
    street: string
    zipCode: string
  }
  avatar: string
  birthDate: string
  email: string
  phoneNo: string
  type: string
  uid: string
  username: string
}
