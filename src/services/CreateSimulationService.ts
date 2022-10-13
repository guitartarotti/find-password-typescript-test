import { ISimulationsRepository } from '@repositories/ISimulationsRepository'

// const simulationsRepository = new SimulationsRepository() // (DIP)

interface ISimulation {
  minValue: number,
  maxValue: number
}
// S => SRD - Single Responsability Principle
class CreateSimulationService {
  // L => LSP - Liskov Substitution Principle
  // D => DIP - Dependency Inversion Principle
  constructor (private simulationsRepository: ISimulationsRepository) {}

  execute ({ minValue = 0, maxValue }: ISimulation): void {
    const simulationAlreadyExists = this.simulationsRepository.findByValues(minValue, maxValue) // (DIP)

    if (simulationAlreadyExists) {
      throw new Error('Simulation already exists')
    }

    this.simulationsRepository.create({ minValue, maxValue })
  }
}

export { CreateSimulationService }
