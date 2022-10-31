import { getInstance } from './instance'

const BASE_URL = '/simulations'

const SimulationsApi = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getSimulations: async () => {
    const instance = getInstance()
    const { data } = await instance.get(`${BASE_URL}`)

    return data
  }
}

export default SimulationsApi
