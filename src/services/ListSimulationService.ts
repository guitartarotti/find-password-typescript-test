import { SimulationsRepository } from '@repositories/SimulationsRepository'
import { Simulation } from '@models/Simulation'

class ListSimulationService {
  constructor (private simulationsRepository: SimulationsRepository) {}
  execute (): Simulation[] {
    const list = this.simulationsRepository.list()

    return list
  }
}

export { ListSimulationService }
