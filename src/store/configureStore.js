import {createStore} from 'redux'
import countReducer from '../reducers/count'

const configureStore = () => {
   const store = createStore(countReducer)
   return store
}

export default configureStore