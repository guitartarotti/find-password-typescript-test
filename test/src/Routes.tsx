import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Commands } from './pages/Commands'
import { Simulations } from './pages/Simulations'

export function AppRoutes () {
  return (
    <Router>
      <Routes>
        <Route path="/commands" element={<Commands/>}/>

        <Route path="/simulations" element={<Simulations/>}/>

      </Routes>
    </Router>
  )
}
