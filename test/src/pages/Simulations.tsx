import React, { useEffect } from 'react'
import { Password } from '../components/Password'
import useReduxState from '../hooks/useReduxState'
import { useDispatch } from 'react-redux'

import { getSimulations } from '../shared/redux-store/Actions/simulationsActions'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Simulations () {
  const dispatch = useDispatch()

  const { simulations } = useReduxState()

  useEffect(() => {
    getSimulations(dispatch)
  }, [])

  const createSimulation = function () {
    getSimulations(dispatch)
  }

  return (
  <div>
    {simulations.map(simulations => {
      return <Password pass={simulations.minValue} id={simulations.id}></Password>
    })}
    <button onClick={createSimulation}>Create</button>
  </div>
  )
}
