import { Provider } from 'react-redux'
// import { Password } from './components/Password'

import './App.css'
import { AppRoutes } from './Routes'
import store from './shared/redux-store'

function App () {
  return (
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
  )
}

export default App
