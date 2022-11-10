interface ILoginRequest {
  email: string
  password: string
}

interface ILoginResponse {
  token?: string
  phoneNumber?: string
}

interface IMe {
  id: number
  email: string
  firstName: string
  lastName: string
  isEmailVerified: boolean
  isNewEmailConfirmed: boolean
  newEmail?: string
  referralCode: string
  phoneNumber?: string
}
