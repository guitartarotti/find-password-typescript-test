import { v4 as uuidV4 } from 'uuid'

class Simulation {
  id?: string
  minValue: number
  maxValue: number
  created_at: Date
  rules: [number]
  possibilities: number

  constructor () {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Simulation }
