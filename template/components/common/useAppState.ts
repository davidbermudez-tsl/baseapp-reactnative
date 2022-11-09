import {useEffect, useRef, useState} from 'react'
import {AppState, AppStateStatus, NativeEventSubscription} from 'react-native'

const useAppState = () => {
  const AppStateListener = useRef<NativeEventSubscription | null>(null)
  const [appState, setAppState] = useState(AppState.currentState)

  const handleAppStateChange = (state: AppStateStatus) => {
    setAppState(state)
  }

  useEffect(() => {
    AppStateListener.current = AppState.addEventListener('change', handleAppStateChange)
    return () => {
      AppStateListener.current?.remove()
    }
  }, [])
  return appState
}

export default useAppState
