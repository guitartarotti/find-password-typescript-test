import {
  GET_SIMULATIONS,
  SET_PASSWORD
} from '../Actions/actionsTypes'

import { ISimulation, ISimulations } from '../../models/reducers'

export const initialState: ISimulations = [
  { minValue: 0, maxValue: 100, rules: [1, 0, 0], possibilities: 0 }
]

const SimulationsReducer = (state = initialState, action: any):any => {
  const { payload } = action
  switch (action.type) {
    case GET_SIMULATIONS:
      return {
        ...state,
        simulations: payload as ISimulation
      }
    case SET_PASSWORD:
      return {
        ...state,
        simulations: payload as ISimulation
      }

    default:
      return state
  }
}

export default SimulationsReducer
