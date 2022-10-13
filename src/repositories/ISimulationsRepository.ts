import { Simulation } from '@models/Simulation'

interface ICreateSimulationDTO {
  minValue: number,
  maxValue: number
}

interface ISimulationsRepository {
  findByValues(minValue: number, maxValue: number): Simulation
  list(): Simulation[]
  create({ minValue, maxValue }: ICreateSimulationDTO): void
}

export { ISimulationsRepository, ICreateSimulationDTO }
