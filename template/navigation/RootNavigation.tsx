import {CommonActions, Route} from '@react-navigation/native'
import {createNavigationContainerRef} from '@react-navigation/native'
import {RootStackParamList} from './types'

export const navigationRef = createNavigationContainerRef<RootStackParamList>()

export const navigate = (name: keyof RootStackParamList, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}

export function getCurrentRoute(): Route<string> | {name?: string} {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute()
  }
  return {}
}

export function resetNavigation() {
  return navigationRef.dispatch(
    CommonActions.reset({routes: [{name: 'dashboard', screen: '/'}], index: 0}),
  )
}
