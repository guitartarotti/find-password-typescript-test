import { ListSimulationUseCase } from '@simulations_useCases/listSimulations/ListSimulationUseCase'
import { SimulationsRepository } from '@simulations_repositories/SimulationsRepository'
import { ListSimulationsController } from '@simulations_useCases/listSimulations/ListSimulationController'

const simulationsRepository = SimulationsRepository.getInstance()

const listSimulationUseCase = new ListSimulationUseCase(simulationsRepository)

const listSimulationController = new ListSimulationsController(listSimulationUseCase)

export { listSimulationController, listSimulationUseCase }
