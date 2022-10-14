import { Simulation } from '@simulations_models/Simulation'

interface ICreateSimulationDTO {
  minValue: number,
  maxValue: number,
  rules: Array<number>,
  possibilities: number
}

interface ISimulationsRepository {
  findByValues(minValue: number, maxValue: number, rules: number[]): Simulation
  list(): Simulation[]
  create({ minValue, maxValue, rules, possibilities }: ICreateSimulationDTO): void
}

export { ISimulationsRepository, ICreateSimulationDTO }
