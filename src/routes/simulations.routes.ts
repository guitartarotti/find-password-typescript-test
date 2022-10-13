import { Router } from 'express'

import { createSimulationController } from '@simulations_useCases/createSimulation'
import { listSimulationController } from '@simulations_useCases/listSimulations/'

const simulationRoutes = Router()
// L => LSP - Liskov Substitution Principle
// S => SRD - Single Responsability Principle
simulationRoutes.post('/', (request, response) => {
  return createSimulationController.handle(request, response)
})

simulationRoutes.get('/', (request, response) => {
  return listSimulationController.handle(request, response)
})

export { simulationRoutes }
