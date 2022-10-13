import { SimulationsRepository } from '@simulations_repositories/SimulationsRepository'
import { Simulation } from '@simulations_models/Simulation'

class ListSimulationUseCase {
  constructor (private simulationsRepository: SimulationsRepository) {}
  execute (): Simulation[] {
    const list = this.simulationsRepository.list()

    return list
  }
}

export { ListSimulationUseCase }
