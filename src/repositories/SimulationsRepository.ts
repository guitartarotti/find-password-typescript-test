import { Simulation } from '@models/Simulation'
import { ISimulationsRepository, ICreateSimulationDTO } from './ISimulationsRepository'

// L => LSP - Liskov Substitution Principle
class SimulationsRepository implements ISimulationsRepository {
  private simulations: Simulation[]

  constructor () {
    this.simulations = []
  }

  create ({ minValue, maxValue }: ICreateSimulationDTO): void {
    const simulation = new Simulation()
    Object.assign(simulation, {
      minValue,
      maxValue,
      created_at: new Date()
    })

    this.simulations.push(simulation)
  }

  list (): Simulation[] {
    return this.simulations
  }

  findByValues (minValue: number, maxValue: number): Simulation {
    const simulation = this.simulations.find(simulation => simulation.minValue === minValue && simulation.maxValue === maxValue)
    return simulation
  }
}

export { SimulationsRepository }
