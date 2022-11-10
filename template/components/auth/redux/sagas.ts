import {PayloadAction} from '@reduxjs/toolkit'
import {all, put, takeEvery, putResolve} from 'redux-saga/effects'
import Slice from './slice'

function* login(action: PayloadAction) {
  const {payload} = action
  try {
    yield putResolve(Slice.actions.loginSuccess(payload))
    yield putResolve(Slice.actions.getCurrentUserSuccess(payload))
  } catch (error) {
    yield put(Slice.actions.requestFailure({error}))
  }
}

function* logout() {
  try {
    yield putResolve(Slice.actions.logoutSuccess())
  } catch (error) {
    yield put(Slice.actions.requestFailure({error}))
  }
}

export default function* AuthFlow() {
  yield all([
    takeEvery(Slice.actions.login.type, login),
    takeEvery(Slice.actions.logout.type, logout),
  ])
}
