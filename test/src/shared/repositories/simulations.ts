import { getInstance } from './instance'

const BASE_URL = '/simulations'

const SimulationsApi = {
  getSimulations: async () => {
    const instance = getInstance()
    const { data } = await instance.get(`${BASE_URL}`)

    return data
  }
}

export default SimulationsApi
