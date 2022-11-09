import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import AuthSlice from '../components/auth/redux/slice'
import rootSagas from './sagas'

const SagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({thunk: false}).prepend(SagaMiddleware)
  },
})

SagaMiddleware.run(rootSagas)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
