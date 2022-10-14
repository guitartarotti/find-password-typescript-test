import { ExecuteCommandsUseCase } from './executeCommandsUseCase'
import { Request, Response } from 'express'

class ExecuteCommandsController {
  constructor (private executeCommandsUseCase: ExecuteCommandsUseCase) {}

  static handle (request: Request, response: Response): Response {
    const list = ExecuteCommandsUseCase.execute()

    return response.json(list)
  }
}

export { ExecuteCommandsController }
