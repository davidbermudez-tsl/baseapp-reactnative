import {useFocusEffect} from '@react-navigation/native'
import React from 'react'
import {useLogout} from '../components/auth/query/login'

const Logout = () => {
  const logout = useLogout()

  useFocusEffect(
    React.useCallback(() => {
      logout()
    }, []),
  )

  return <></>
}

export default Logout
