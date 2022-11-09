import React, {useEffect} from 'react'
import RNSplashScreen from 'react-native-splash-screen'
import useAppState from '../components/common/useAppState'
import {useAppSelector} from '../redux/hooks'

const SplashScreen = () => {
  const {auth} = useAppSelector(({auth}) => ({auth}))
  const appState = useAppState()

  useEffect(() => {
    if (auth.appLoaded && appState.includes('active')) {
      RNSplashScreen.hide()
    }
    return RNSplashScreen.hide
  }, [auth.appLoaded, appState])

  return <></>
}

export default SplashScreen
