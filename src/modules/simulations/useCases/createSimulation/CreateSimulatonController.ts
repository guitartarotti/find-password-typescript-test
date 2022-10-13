import { CreateSimulationUseCase } from '@simulations_useCases/createSimulation/CreateSimulationUseCase'
import { Request, Response } from 'express'

class CreateSimulationController {
  constructor (private createSimulationUseCase: CreateSimulationUseCase) {}

  handle (request: Request, response: Response): Response {
    const { minValue, maxValue, rules } = request.body

    this.createSimulationUseCase.execute({
      minValue,
      maxValue,
      rules
    })

    return response.status(201).send()
  }
}

export { CreateSimulationController }
