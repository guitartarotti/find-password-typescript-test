export interface ISimulation {
  id:string
  minValue: number
  maxValue?: number
  rules?: Array<number>
  possibilities?: number
  created_at: Date
}

interface ISimulations extends Array<ISimulation>{}

export interface IReduxState {
  simulations: ISimulations
}
