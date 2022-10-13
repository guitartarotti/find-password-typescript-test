import { Simulation } from '@models/Simulation'
import { ISimulationsRepository, ICreateSimulationDTO } from './ISimulationsRepository'

// L => LSP - Liskov Substitution Principle
class SimulationsRepository implements ISimulationsRepository {
  private simulations: Simulation[]

  constructor () {
    this.simulations = []
  }

  create ({ minValue, maxValue, rules, possibilities }: ICreateSimulationDTO): void {
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

  list (): Simulation[] {
    return this.simulations
  }

  findByValues (minValue: number, maxValue: number, rules: [number]): Simulation {
    const simulation = this.simulations.find(simulation =>
      simulation.minValue === minValue &&
      simulation.maxValue === maxValue &&
      simulation.rules.length === rules.length &&
      simulation.rules.every(function (element, index) {
        return element === rules[index]
      }))
    return simulation
  }
}

export { SimulationsRepository }
