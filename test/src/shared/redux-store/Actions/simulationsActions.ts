import { ISimulations } from './../../models/reducers/index.d'
import {
  GET_SIMULATIONS
} from '../Actions/actionsTypes'
import SimulationsApi from '../../repositories/simulations'

export const getSimulations = (
  callback = (_res: ISimulations | null, _err: Error | null) => {}
) => async (dispatch: any) => {
  try {
    dispatch({
      payload: [],
      type: GET_SIMULATIONS
    })
    const payload: ISimulations = await SimulationsApi.getSimulations()

    callback(payload, null)

    dispatch({
      payload: payload.simulations,
      type: GET_SIMULATIONS
    })
  } catch (err: any) {
    callback(null, err)
  }
}
