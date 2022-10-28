import { useSelector } from 'react-redux'

import { IReduxState } from '../shared/models/reducers'

const useReduxState = () => useSelector((state: IReduxState) => state)

export default useReduxState
