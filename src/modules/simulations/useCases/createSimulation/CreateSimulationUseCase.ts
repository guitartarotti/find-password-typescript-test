import { AppError } from './../../../../errors/AppError'
import { ISimulationsRepository } from '@simulations_repositories/ISimulationsRepository'
import { CheckRulesService } from './services/checkRulesService'

// const simulationsRepository = new SimulationsRepository() // (DIP)

interface ISimulation {
  minValue: number,
  maxValue: number,
  rules: Array<number>
}

// S => SRD - Single Responsability Principle
class CreateSimulationUseCase {
  // L => LSP - Liskov Substitution Principle
  // D => DIP - Dependency Inversion Principle
  constructor (private simulationsRepository: ISimulationsRepository) {}

  execute ({ minValue = 0, maxValue, rules }: ISimulation): void {
    const simulationAlreadyExists = this.simulationsRepository.findByValues(minValue, maxValue, rules) // (DIP)

    if (simulationAlreadyExists) {
      throw new AppError('Simulation already exists', 401)
    }

    const possibilities = CheckRulesService.execute(minValue, maxValue, rules) // checkRules(minValue, maxValue, rules)

    this.simulationsRepository.create({ minValue, maxValue, rules, possibilities: possibilities.length, numbers: possibilities })
  }
}

export { CreateSimulationUseCase }
