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

  function changeItem (set: Function, get: Function, item: Array<any>) {
    const setChange = set
    const getChange = get
    const itens = item

    async function create () {
      getChange(dispatch)
    }

    function openItem (id: string): any {
      function getRule (id: string) {
        for (let index = itens[itens.findIndex(x => x.id === id)].rules.length - 1; index >= 0; index--) {
          if (itens[itens.findIndex(x => x.id === id)].rules[index] === 1) { return index }
        }
      }

      setChange(dispatch, { isActive: true, idActive: id, ruleActive: Number(getRule(id)) })
    }

    function returnList () {
      setChange(dispatch, { isActive: false, ruleActive: 0 })
    }

    return {
      create,
      openItem,
      returnList
    }
  }

  const changeSimulation = changeItem(setSimulations, getSimulations, simulations)

  useQuery('simulations', changeSimulation.create)

  return (
  <>
  <div className={statesimulation.isActive ? 'content-list cls' : 'content-list opn'}>
    <div className='list now'>
      <div className='item-list'>
       {simulations.map(simulations => {
         return <Simulation simulation={simulations} func={changeSimulation.openItem}></Simulation>
       })}
       <div className={simulations.length === 0 ? 'content-warning opn' : 'content-warning cls'}><p>Don't exists simulations, open the Insomnia and add</p></div>
    </div>
    <div className={statesimulation.isActive ? 'content-button opn' : 'content-button cls'}>
      <button className='button-close' onClick={changeSimulation.returnList}>Return</button>
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
            return <div className='content-number'>
                    <div className='item-number'>
                      <p>{String(number.number).split('').map((num, index) => {
                        if (number.rules[statesimulation.ruleActive][index] === 0) {
                          return <small className='rul'>{num.trim()}</small>
                        // eslint-disable-next-line no-mixed-operators
                        } else if (index > 0 && number.rules[statesimulation.ruleActive][index - 1] === 0) {
                          return <small className='rul'>{num.trim()}</small>
                        } else {
                          return <small className='not'>{num.trim()}</small>
                        }
                      })}</p>
                    </div>
                  </div>
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
