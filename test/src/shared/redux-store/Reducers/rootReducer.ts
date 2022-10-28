import { combineReducers } from 'redux'

import SimulationsReducer from './simulationsReducer'

import { IReduxState } from '../../models/reducers'

const appReducer = combineReducers<IReduxState>({
  simulations: SimulationsReducer
})

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action)
}

export default rootReducer
