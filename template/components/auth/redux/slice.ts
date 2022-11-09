import {createSlice} from '@reduxjs/toolkit'

const errorHandler = (state, action) => ({
  ...state,
  isSaving: false,
  isFetching: false,
  errors: action.payload.errors,
})

const initialState = {
  appLoaded: false,
  isFetching: false,
  isLoggedIn: false,
  errors: false,
  avatar: {},
  permissions: [],
}

export const AuthSlice = createSlice({
  name: 'AUTH',
  initialState,
  reducers: {
    appLoaded: (state) => ({...state, appLoaded: true}),
    login: (state, _) => ({...state, isFetching: true}),
    loginSuccess: (state, action) => ({
      ...state,
      isLoggedIn: true,
      ...action.payload,
      isFetching: false,
      errors: false,
    }),
    getCurrentUser: (state) => ({...state, isFetching: true}),
    getCurrentUserSuccess: (state, action) => ({
      ...state,
      ...action.payload,
      isFetching: false,
      errors: false,
      appLoaded: true,
    }),
    logout: (state) => ({...state, isFetching: true}),
    logoutSuccess: () => ({
      ...initialState,
      appLoaded: true,
    }),
    requestFailure: errorHandler,
  },
})

export default AuthSlice
