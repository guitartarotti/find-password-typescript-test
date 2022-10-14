class CheckRulesService {
  static execute (min: number, max: number, rules: number[]): number {
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
}

export { CheckRulesService }
