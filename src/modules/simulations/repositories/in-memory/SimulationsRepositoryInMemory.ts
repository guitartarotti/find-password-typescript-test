import { Simulation } from '@simulations_models/Simulation'
import { ICreateSimulationDTO, ISimulationsRepository } from '@simulations_repositories/ISimulationsRepository'

class SimulationsRepositoryInMemory implements ISimulationsRepository {
  simulations: Simulation[] = []

  findByValues (minValue: number, maxValue: number, rules: number[]): Simulation {
    const simulation = this.simulations.find(simulation =>
      simulation.minValue === minValue &&
      simulation.maxValue === maxValue &&
      simulation.rules.length === rules.length &&
      simulation.rules.every(function (element, index) {
        return element === rules[index]
      }))
    return simulation
  }

  list (): Simulation[] {
    return this.simulations
  }

  async create ({ minValue, maxValue, rules, possibilities }: ICreateSimulationDTO): Promise<void> {
    const simulation = new Simulation()
    Object.assign(simulation, {
      minValue,
      maxValue,
      created_at: new Date(),
      rules,
      possibilities
    })

    this.simulations.push(simulation)
  }
}

export { SimulationsRepositoryInMemory }
