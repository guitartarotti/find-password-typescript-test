import express from 'express'
import { simulationRoutes } from '@routes/simulations.routes'

const app = express()

app.use(express.json())

app.use('/simulations', simulationRoutes)

app.listen(3333, () => console.log('Server is running !'))
