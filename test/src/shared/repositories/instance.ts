import axios from 'axios'
import serverConfig from '../config/server.json'

const axiosInstance = axios.create({
  baseURL: serverConfig.backendUrl,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 20000
})

/**
 * @returns {AxiosInstance} The current instance
 */
export const getInstance = () => axiosInstance
