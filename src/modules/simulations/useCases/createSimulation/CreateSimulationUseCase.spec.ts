import { CreateSimulationUseCase } from '@simulations_useCases/createSimulation/CreateSimulationUseCase'
import { SimulationsRepositoryInMemory } from '@simulations_repositories/in-memory/SimulationsRepositoryInMemory'

let createSimulationUseCase: CreateSimulationUseCase
let simulationsRepositoryInMemory: SimulationsRepositoryInMemory

describe('Create Simulation', () => {
  beforeEach(() => {
    simulationsRepositoryInMemory = new SimulationsRepositoryInMemory()
    createSimulationUseCase = new CreateSimulationUseCase(simulationsRepositoryInMemory)
  })

  it('Should be able to create a new Simulation', () => {
    const simulation = {
      minValue: 184759,
      maxValue: 856920,
      rules: [1, 1, 1]
    }

    createSimulationUseCase.execute({
      minValue: simulation.minValue,
      maxValue: simulation.maxValue,
      rules: simulation.rules
    })

    const simulationCreated = simulationsRepositoryInMemory.findByValues(simulation.minValue, simulation.maxValue, simulation.rules)

    expect(simulationCreated).toHaveProperty('id')
  })

  it('Should not be able to create a new Simulation with name exists', () => {
    expect(() => {
      const simulation = {
        minValue: 184759,
        maxValue: 856920,
        rules: [1, 1, 1]
      }

      createSimulationUseCase.execute({
        minValue: simulation.minValue,
        maxValue: simulation.maxValue,
        rules: simulation.rules
      })

      createSimulationUseCase.execute({
        minValue: simulation.minValue,
        maxValue: simulation.maxValue,
        rules: simulation.rules
      })
    }).toThrowError()
  })
})
