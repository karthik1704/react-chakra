export interface ILogin {
  email: string
  password: string
}

export interface IRegister extends Omit<ILogin, 'password'> {
  firstName: string
  lastName: string
  password1: string
  password2: string
}

export interface User {
  firstName: string
  lastName: string
  email: string
  avatar: string
}

export interface LoginResponse {
  isAuthenticated: Boolean | null
  accessToken: string | null
  refreshToken: string | null
  user: User | null
}
