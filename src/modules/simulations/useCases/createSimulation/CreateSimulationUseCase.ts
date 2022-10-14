import { AppError } from './../../../../errors/AppError'
import { ISimulationsRepository } from '@simulations_repositories/ISimulationsRepository'

// const simulationsRepository = new SimulationsRepository() // (DIP)

interface ISimulation {
  minValue: number,
  maxValue: number,
  rules: Array<number>
}

const checkRules = function (min: number, max: number, rules: string | any[]) {
  const newPossibilities = []

  const check = function (index: number) {
    const newRules = [0, 1, 1]
    const newNumber = String(index)
    for (let i = 0; i < newNumber.length - 1; i++) {
      // Check Ddecreasing
      if (newNumber[i] < newNumber[i + 1]) {
        newRules[0] = 1
      }
      // Check Double
      if (newNumber[i] === newNumber[i + 1]) {
        newRules[1] = 0
      }
      // Check new rule part 2
      if (i < newNumber.length - 2 && newNumber[i] === newNumber[i + 1] && newNumber[i] !== newNumber[i + 2]) {
        newRules[2] = 0
      }
    }

    // Desativa regras não especificadas
    for (let x = 0; x < rules.length; x++) {
      if (rules[x] === 0) { newRules[x] = 0 }
    }

    const sum = newRules.reduce(function (soma, i) { return soma + i })

    if (sum !== 0) { return false }

    return true
  }

  for (let index = min; index <= max; index++) {
    if (check(index)) { newPossibilities.push(index) }
  }

  return newPossibilities.length
}
// S => SRD - Single Responsability Principle
class CreateSimulationUseCase {
  // L => LSP - Liskov Substitution Principle
  // D => DIP - Dependency Inversion Principle
  constructor (private simulationsRepository: ISimulationsRepository) {}

  execute ({ minValue = 0, maxValue, rules }: ISimulation): void {
    const simulationAlreadyExists = this.simulationsRepository.findByValues(minValue, maxValue, rules) // (DIP)

    if (simulationAlreadyExists) {
      throw new AppError('Simulation already exists')
    }

    const possibilities = checkRules(minValue, maxValue, rules)

    this.simulationsRepository.create({ minValue, maxValue, rules, possibilities })
  }
}

export { CreateSimulationUseCase }
