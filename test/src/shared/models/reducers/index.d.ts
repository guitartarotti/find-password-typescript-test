export interface ISimulation {
  id:string,
  minValue: number,
  maxValue?: number,
  rules: Array<number>,
  numbers: Array<number>,
  possibilities?: number,
  created_at: Date,
  date_now?: String,
  isActive?: Boolean
}

export interface IStateSimulation {
  isActive: Boolean,
  idActive?: String
}

interface ISimulations extends Array<ISimulation>{}

export interface IReduxState {
  simulations: ISimulations,
  statesimulation: IStateSimulation
}
