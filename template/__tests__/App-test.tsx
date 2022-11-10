/**
 * @format
 */

import 'react-native'
import React from 'react'
import App from '../App'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

import {NativeBaseProvider} from 'native-base'
import colorModeManager from '../theme/colorModeManager'
import customTheme from '../theme/theme'

it('renders correctly', () => {
  renderer.create(
    <NativeBaseProvider theme={customTheme} colorModeManager={colorModeManager}>
      <App />
    </NativeBaseProvider>,
  )
})
