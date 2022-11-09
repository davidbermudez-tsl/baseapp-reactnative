/**
 * @format
 */

import 'react-native-gesture-handler'
import {AppRegistry, useColorScheme} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import {navigationRef} from './navigation/RootNavigation'
import {NativeBaseProvider, useColorMode} from 'native-base'
import ReactQueryProvider from './util/reactQuery'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import theme from './theme/theme'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import colorModeManager from './theme/colorModeManager'

export default function Main() {
  return (
    <ReactQueryProvider>
      <Provider store={store}>
        <SafeAreaProvider>
          <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
            <App />
          </NativeBaseProvider>
        </SafeAreaProvider>
      </Provider>
    </ReactQueryProvider>
  )
}

AppRegistry.registerComponent(appName, () => Main)
