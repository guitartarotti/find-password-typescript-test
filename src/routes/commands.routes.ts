import { Router } from 'express'

import { ExecuteCommandsController } from '../modules/commands/useCases/executeCommands/executeCommandsController'

const commandsRoutes = Router()
// L => LSP - Liskov Substitution Principle
// S => SRD - Single Responsability Principle

commandsRoutes.get('/', (request, response) => {
  return ExecuteCommandsController.handle(request, response)
})

export { commandsRoutes }
