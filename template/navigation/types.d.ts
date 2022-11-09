export type RootStackParamList = {
  Home: undefined
  Login: undefined
  Logout: undefined
}

export type TabParamList = {
  Home: NavigatorScreenParams<RootStackParamList>
  Settings: undefined
  User: undefined
}

export type DrawerParamList = {
  Home: NavigatorScreenParams<RootStackParamList>
  Dashboard: undefined
}
