import {FormikProps} from 'formik'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useMutation, useQuery, useQueryClient} from 'react-query'
import axios from '../../../util/AxiosInstance'
import {useAppDispatch} from '../../../redux/hooks'
import AuthSlice from '../redux/slice'
import {useEffect, useState} from 'react'

interface LoginRequest {
  email: string
  password: string
}

interface LoginResponse {
  token?: string
  phoneNumber?: string
}

interface Me {
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

export const useLoginMutation = (formik: FormikProps<any>) => {
  const queryClient = useQueryClient()
  const me = useCurrentUser()

  return useMutation(
    async (data: LoginRequest) => {
      formik.setSubmitting(true)
      await AsyncStorage.removeItem('token')
      return await axios.post<LoginResponse>('/login', data)
    },
    {
      onError: (err: any) => {
        formik.setErrors(err.response.data)
        formik.setSubmitting(false)
      },
      onSuccess: async (response) => {
        if (response?.data.token) {
          await AsyncStorage.setItem('token', response?.data.token)
          // by invalidating the cache we force a reload of /v1/users/me
          await queryClient.invalidateQueries(['users', 'me'])
          await me.refetch()
        }
        formik.setSubmitting(false)
      },
    },
  )
}

export const useCurrentUser = () => {
  const [token, setToken] = useState<string | null>()

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token')
        setToken(token)
        if (!token) {
          dispatch(AuthSlice.actions.appLoaded())
        }
      } catch {
        dispatch(AuthSlice.actions.appLoaded())
      }
    }
    getToken()
  }, [])

  const dispatch = useAppDispatch()
  const query = useQuery('/users/me', () => axios.get<Me>('/users/me').then((r) => r.data), {
    staleTime: Infinity, // makes cache never expire automatically
    enabled: Boolean(token),
    useErrorBoundary: false,
    onSuccess: (user: any) => {
      dispatch(AuthSlice.actions.login(user))
    },
    onError: async (error: any) => {
      if (error?.response?.status === 401) {
        // since response is 401 Unauthorized it also probably has the body:
        // {"detail":"Invalid token."}
        // better remove the token
        await AsyncStorage.removeItem('token')
      }
      dispatch(AuthSlice.actions.appLoaded())
    },
  })
  return query
}

export function useLogout() {
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()
  return async () => {
    await AsyncStorage.removeItem('token')
    dispatch(AuthSlice.actions.logout())
    // by invalidating the cache we force a reload of /v1/users/me
    queryClient.invalidateQueries(['users', 'me'])
  }
}
