import { combineReducers } from 'redux'

import SimulationsReducer from './simulationsReducer'
import stateSimulationsReducer from './statesimulationsReducer'

import { IReduxState } from '../../models/reducers'

const appReducer = combineReducers<IReduxState>({
  simulations: SimulationsReducer,
  statesimulation: stateSimulationsReducer
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const rootReducer = (state: any, action: any) => {
  return appReducer(state, action)
}

export default rootReducer
