import { Router } from 'express'
import { CreateSimulationUseCase } from '@simulations_useCases/createSimulation/CreateSimulationUseCase'
import { ListSimulationUseCase } from '@simulations_useCases/listSimulations/ListSimulationUseCase'

import { SimulationsRepository } from '@simulations_repositories/SimulationsRepository'

const simulationRoutes = Router()
// L => LSP - Liskov Substitution Principle
const simulationsRepository = new SimulationsRepository()

simulationRoutes.post('/', (request, response) => {
  const { minValue, maxValue, rules } = request.body

  // S => SRD - Single Responsability Principle
  const createSimulationUseCase = new CreateSimulationUseCase(simulationsRepository)

  createSimulationUseCase.execute({
    minValue,
    maxValue,
    rules
  })

  return response.status(201).send()
})

simulationRoutes.get('/', (request, response) => {
  const listSimulationUseCase = new ListSimulationUseCase(simulationsRepository)

  const list = listSimulationUseCase.execute()

  return response.json(list)
})

export { simulationRoutes }
