export interface ISimulation {
  minValue: number
  maxValue?: number
  rules?: Array<number>
  possibilities?: number
}

interface ISimulations extends Array<ISimulation>{}

export interface IReduxState {
  simulations: ISimulations
}
