import {useAppSelector} from './redux/hooks'
import {useCurrentUser} from './components/auth/query/auth'
import SplashScreen from './layouts/SplashScreen'
import Router from './Router'
import {navigationRef} from './navigation/RootNavigation'
import {StatusBar, useColorMode, useTheme} from 'native-base'
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native'

const App = () => {
  const {colorMode} = useColorMode()
  const {colors} = useTheme()
  const {appLoaded} = useAppSelector(({auth}) => ({...auth}))
  useCurrentUser()

  const NavigationDarkTheme = {
    dark: true,
    colors: {
      ...DarkTheme.colors,
      primary: colors.primary['600'],
      card: colors.gray['900'],
      text: colors.text['100'],
    },
  }

  return (
    <>
      <SplashScreen />
      <StatusBar barStyle={colorMode === 'dark' ? 'light-content' : 'dark-content'} />
      <NavigationContainer
        ref={navigationRef}
        theme={colorMode === 'dark' ? NavigationDarkTheme : DefaultTheme}
      >
        {appLoaded && <Router />}
      </NavigationContainer>
    </>
  )
}

export default App
