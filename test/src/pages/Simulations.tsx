import { Password } from '../components/Password'
import useReduxState from '../hooks/useReduxState'

export function Simulations () {
  const { simulations } = useReduxState()
  console.log(simulations)
  return (
  <div>
    {simulations.map(simulations => {
      return <Password pass={simulations.minValue}></Password>
    })}
  </div>
  )
}
