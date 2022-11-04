import {
  SET_SIMULATION
} from '../Actions/actionsTypes'

import { IStateSimulation } from '../../models/reducers'

export const initialState: IStateSimulation = {
  isActive: false,
  ruleActive: 0
}

const SimulationsReducer = (state = initialState, action: any):any => {
  const { payload } = action
  switch (action.type) {
    case SET_SIMULATION:
      return {
        isActive: payload.isActive,
        idActive: payload.idActive,
        ruleActive: payload.ruleActive
      }

    default:
      return state
  }
}

export default SimulationsReducer
