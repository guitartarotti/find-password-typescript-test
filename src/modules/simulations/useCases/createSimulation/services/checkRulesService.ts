const rulesList = [
  {
    execute: function (newNumber: string, i: number): number {
      if (newNumber[i] < newNumber[i + 1]) {
        return 1
      }
      return 2
    }
  },
  {
    execute: function (newNumber: string, i: number): number {
      if (newNumber[i] === newNumber[i + 1]) {
        return 0
      }
      return 2
    }
  },
  {
    execute: function (newNumber: string, i: number): number {
      if (i < newNumber.length - 2 && newNumber[i] === newNumber[i + 1] && newNumber[i] !== newNumber[i + 2]) {
        return 0
      }
      return 2
    }
  }
]

class CheckRulesService {
  static execute (min: number, max: number, rules: number[]): number {
    function checkRules () {
      const newPossibilities = []

      function check (index: number): Boolean {
        const newRules = [0, 1, 1]
        const newNumber = String(index)
        for (let i = 0; i < newNumber.length - 1; i++) {
          for (let x = 0; x < rulesList.length; x++) {
            const ruleNow = rulesList[x].execute
            if (ruleNow(newNumber, i) !== 2) {
              newRules[x] = ruleNow(newNumber, i)
            }
          }
        }

        // Desativa regras não especificadas
        for (let x = 0; x < rules.length; x++) {
          if (rules[x] === 0) { newRules[x] = 0 }
        }

        const sum = newRules.reduce(function (soma, i) { return soma + i })

        if (sum !== 0) { return false }

        newPossibilities.push(index)
      }

      return {
        check,
        newPossibilities
      }
    }

    const checkPossibilities = checkRules()

    function forPasswords () {
      const state = {
        observers: []
      }

      function subscribe (observerFunction: Function) {
        state.observers.push(observerFunction)
      }

      function notifyAll (possibility: number) {
        for (const observerFunction of state.observers) {
          observerFunction(possibility)
        }
      }

      function checkList (possibility: number) {
        notifyAll(possibility)
      }

      return {
        subscribe,
        checkList
      }
    }

    const createCheck = forPasswords()

    createCheck.subscribe(checkPossibilities.check)

    for (let index = min; index <= max; index++) {
      createCheck.checkList(index)
    }

    return checkPossibilities.newPossibilities.length
  }
}

export { CheckRulesService }
