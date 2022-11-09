import _axios from 'axios'
import humps from 'humps'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {buildQueryString} from './queryString'
import {API_URL} from '@env'

function createAxiosInstance() {
  const instance = _axios.create({
    baseURL: API_URL,
    paramsSerializer(params) {
      return buildQueryString(params)
    },
  })

  instance.defaults.headers.post['Content-Type'] = 'application/json'
  instance.defaults.headers.patch['Content-Type'] = 'application/json'
  instance.defaults.headers.get['Content-Type'] = 'application/json'

  instance.interceptors.request.use(async (request) => {
    const authToken = await AsyncStorage.getItem('token')
    if (authToken && request.headers && !request.headers.Authorization) {
      request.headers.Authorization = `Token ${authToken}`
    }
    if (request.headers && typeof Intl !== 'undefined') {
      request.headers['X-Timezone'] = Intl.DateTimeFormat().resolvedOptions().timeZone
    }

    if (request.data) {
      request.data = JSON.stringify(humps.decamelizeKeys(request.data))
    }
    return request
  })
  return instance
}
const axios = createAxiosInstance()

axios.interceptors.response.use(
  (response) => {
    if (response.data && response.headers?.['content-type'] === 'application/json') {
      response.data = humps.camelizeKeys(response.data)
    }
    return response
  },
  function (error) {
    if (error.response.data && error.response.headers?.['content-type'] === 'application/json') {
      error.response.data = humps.camelizeKeys(error.response.data)
    }
    return Promise.reject(error)
  },
)

export default axios
