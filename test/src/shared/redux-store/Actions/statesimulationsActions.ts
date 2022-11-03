import { IStateSimulation } from './../../models/reducers/index.d'
import {
  SET_SIMULATION
} from '../Actions/actionsTypes'

export const setSimulations = (dispatch: any, payload: IStateSimulation): any => {
  dispatch({
    payload,
    type: SET_SIMULATION
  })
}
