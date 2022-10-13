import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'
import { simulationRoutes } from '@simulations_routes/simulations.routes'

const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use('/simulations', simulationRoutes)

app.listen(3333, () => console.log('Server is running !'))
