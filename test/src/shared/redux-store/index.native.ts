import { createStore } from 'redux'

import rootReducerObj from './Reducers/rootReducer'

const init = () =>
  createStore(
    rootReducerObj
  )

const store = init()

export default store
