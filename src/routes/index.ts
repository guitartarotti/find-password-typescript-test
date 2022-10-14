import { Router } from 'express'
import { commandsRoutes } from './commands.routes'
import { simulationRoutes } from './simulations.routes'

const router = Router()

router.use('/simulations', simulationRoutes)
router.use('/commands', commandsRoutes)

export { router }
