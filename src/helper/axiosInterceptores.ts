import axios from 'axios'

let headers = {}
const myAxios = axios.create({
  headers,
})

myAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')
    if (token && config) {
      config.headers!.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

myAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  }
)

export default myAxios
