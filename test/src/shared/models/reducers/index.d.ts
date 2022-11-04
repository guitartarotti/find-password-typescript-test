export interface ISimulation {
  id:string,
  minValue: number,
  maxValue?: number,
  rules: Array<number>,
  numbers: Array<INumber>,
  possibilities?: number,
  created_at: Date,
  date_now?: String,
  isActive?: Boolean
}

export interface INumber {
  number: number
  rules: Array<Array<number>>
}

export interface IStateSimulation {
  isActive: boolean,
  idActive?: string,
  ruleActive: number
}

interface ISimulations extends Array<ISimulation>{}

export interface IReduxState {
  simulations: ISimulations,
  statesimulation: IStateSimulation
}
