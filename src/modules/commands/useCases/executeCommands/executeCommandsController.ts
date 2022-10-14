import { ExecuteCommandsUseCase } from './executeCommandsUseCase'
import { Request, Response } from 'express'

class ExecuteCommandsController {
  constructor (private executeCommandsUseCase: ExecuteCommandsUseCase) {}

  static async handle (request: Request, response: Response): Promise<Response> {
    const list = await ExecuteCommandsUseCase.execute()

    return response.json(list)
  }
}

export { ExecuteCommandsController }
