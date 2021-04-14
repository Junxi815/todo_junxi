import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {changeTodos} from './reducers'

const store = createStore(changeTodos,composeWithDevTools(applyMiddleware(thunk)))
export default store
