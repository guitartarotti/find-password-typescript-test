import { ISimulations } from './../../models/reducers/index.d'
import {
  GET_SIMULATIONS
} from '../Actions/actionsTypes'
import SimulationsApi from '../../repositories/simulations'

export const getSimulations = async (dispatch: any):Promise<any> => {
  dispatch({
    payload: [],
    type: GET_SIMULATIONS
  })
  const payload: ISimulations = await SimulationsApi.getSimulations()

  dispatch({
    payload,
    type: GET_SIMULATIONS
  })
}
