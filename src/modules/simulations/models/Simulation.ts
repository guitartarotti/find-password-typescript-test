import { v4 as uuidV4 } from 'uuid'

interface INumber {
  number: number,
  rules: Array<Array<number>>
}

class Simulation {
  id?: string
  minValue: number
  maxValue: number
  created_at: Date
  rules: Array<number>
  possibilities: number
  numbers: Array<INumber>

  constructor () {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Simulation }
