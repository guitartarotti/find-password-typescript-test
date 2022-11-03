import { useSelector } from 'react-redux'

import { IReduxState } from '../shared/models/reducers'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useReduxState = () => useSelector((state: IReduxState) => state)

export default useReduxState
