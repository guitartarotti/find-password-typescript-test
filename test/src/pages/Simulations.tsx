import React/*, { useEffect } */ from 'react'
import { useQuery } from 'react-query'
import { Simulation } from '../components/Simulation'
import useReduxState from '../hooks/useReduxState'
import { useDispatch } from 'react-redux'

import { getSimulations } from '../shared/redux-store/Actions/simulationsActions'
import { setSimulations } from '../shared/redux-store/Actions/statesimulationsActions'

import './Simulations.css'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Simulations () {
  const dispatch = useDispatch()

  const { simulations, statesimulation } = useReduxState()

  // useEffect(() => {
  //  getSimulations(dispatch)
  // }, [])

  const createSimulations = async () => {
    getSimulations(dispatch)
  }

  useQuery('simulations', createSimulations)

  const returnList = function () {
    setSimulations(dispatch, { isActive: false })
  }

  const openItem = function (id: string): any {
    setSimulations(dispatch, { isActive: true, idActive: id })
  }

  console.log(simulations)

  return (
  <>
  <div className={statesimulation.isActive ? 'content-list cls' : 'content-list opn'}>
    <div className='list now'>
      <div className='item-list'>
       {simulations.map(simulations => {
         return <Simulation simulation={simulations} func={openItem}></Simulation>
       })}
    </div>
    <div className={statesimulation.isActive ? 'content-button opn' : 'content-button cls'}>
      <button className='button-close' onClick={returnList}>Return</button>
    </div>
    <div className={statesimulation.isActive ? 'content-title cls' : 'content-title opn'}>
      <h3>Simulations</h3>
    </div>
    </div>
  </div>
  <div className={statesimulation.isActive ? 'content-numbers opn' : 'content-numbers cls'}>
    {simulations.map(simulation => {
      if (statesimulation.isActive) {
        if (simulation.id === statesimulation.idActive) {
          return simulation.numbers.map(number => {
            return <div className='content-number'><div className='item-number'><p>{number}</p></div></div>
          })
        } else {
          return []
        }
      } else {
        return []
      }
    })}
  </div>
  </>
  )
}
//
