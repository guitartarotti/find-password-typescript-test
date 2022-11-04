import {
  GET_SIMULATIONS,
  SET_PASSWORD
} from '../Actions/actionsTypes'

import { ISimulation, ISimulations } from '../../models/reducers'

export const initialState: ISimulations = [
  { id: '0', minValue: 0, maxValue: 100, rules: [1, 0, 0], possibilities: 0, created_at: new Date(), numbers: [0, 100] }
]

function check () {
  function checkDouble (init: any[], payload: any[]) {
    const newArray = init.reduce((acc: any[], item: any) => {
      if (payload.findIndex(x => x.id === item.id) !== -1) {
        return acc
      } else {
        acc.push(item)
      }
      return acc
    }, [])

    return newArray
  }

  return {
    checkDouble
  }
}

const checkArray = check()

const SimulationsReducer = (state = initialState, action: any):any => {
  const { payload } = action
  switch (action.type) {
    case GET_SIMULATIONS:
      // eslint-disable-next-line no-case-declarations
      const newState = checkArray.checkDouble(state, payload)
      return [...newState, ...payload]
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
