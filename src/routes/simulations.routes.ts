import { Router } from 'express'
import { CreateSimulationService } from '@services/CreateSimulationService'
import { ListSimulationService } from '@services/ListSimulationService'

import { SimulationsRepository } from '@repositories/SimulationsRepository'

const simulationRoutes = Router()
// L => LSP - Liskov Substitution Principle
const simulationsRepository = new SimulationsRepository()

simulationRoutes.post('/', (request, response) => {
  const { minValue, maxValue } = request.body

  // S => SRD - Single Responsability Principle
  const createSimulationService = new CreateSimulationService(simulationsRepository)

  createSimulationService.execute({
    minValue,
    maxValue
  })

  return response.status(201).send()
})

simulationRoutes.get('/', (request, response) => {
  const listSimulationService = new ListSimulationService(simulationsRepository)

  const list = listSimulationService.execute()

  return response.json(list)
})

export { simulationRoutes }
