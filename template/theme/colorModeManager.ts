import {StorageManager} from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Appearance} from 'react-native'

const colorModeManager: StorageManager = {
  get: async () => {
    try {
      let val = await AsyncStorage.getItem('@color-mode')
      return val === 'dark' ? 'dark' : val === 'light' ? 'light' : Appearance.getColorScheme()
    } catch (e) {
      return Appearance.getColorScheme()
    }
  },
  set: async (value: 'light' | 'dark' | 'system') => {
    try {
      await AsyncStorage.setItem('@color-mode', value)
    } catch (e) {
      await AsyncStorage.removeItem('@color-mode')
      console.log(e)
    }
  },
}

export default colorModeManager
