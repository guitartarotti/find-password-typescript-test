import { CreateSimulationUseCase } from '@simulations_useCases/createSimulation/CreateSimulationUseCase'
import { SimulationsRepository } from '@simulations_repositories/SimulationsRepository'
import { CreateSimulationController } from '@simulations_useCases/createSimulation/CreateSimulatonController'

const simulationsRepository = SimulationsRepository.getInstance()

const createSimulationUseCase = new CreateSimulationUseCase(simulationsRepository)

const createSimulationController = new CreateSimulationController(createSimulationUseCase)

export { createSimulationController, createSimulationUseCase }
