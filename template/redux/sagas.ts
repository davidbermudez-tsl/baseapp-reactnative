import {call, all, spawn} from 'redux-saga/effects'
import AuthFlow from '../components/auth/redux/sagas'

export default function* root() {
  const sagas = [AuthFlow]
  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      }),
    ),
  )
}
