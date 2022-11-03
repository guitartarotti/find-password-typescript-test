import { ISimulation } from '../shared/models/reducers'

type PassProps = {
  simulation: ISimulation,
  func: any
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Simulation (props: PassProps) {
  const { simulation, func } = props

  simulation.date_now = new Date(simulation.created_at).toDateString()

  return (
    <div key={simulation.id} className='item' onClick={() => func(simulation.id)}>
      <title>{simulation.minValue} to {simulation.maxValue}</title>
      <div className='list-rules'>
        {simulation.rules.map(rule => {
          return <span className={ rule.toString() }></span>
        })}
      </div>
      <div className='content-date'>{simulation.date_now}</div>
    </div>
  )
}
