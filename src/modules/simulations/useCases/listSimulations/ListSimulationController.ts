import { Request, Response } from 'express'

import { ListSimulationUseCase } from '@simulations_useCases/listSimulations/ListSimulationUseCase'

class ListSimulationsController {
  constructor (private listSimulationUseCase: ListSimulationUseCase) {}

  handle (request: Request, response: Response): Response {
    const list = this.listSimulationUseCase.execute()

    return response.json(list)
  }
}
export { ListSimulationsController }
