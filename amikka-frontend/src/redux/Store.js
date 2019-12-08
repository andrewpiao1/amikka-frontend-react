import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers/RootReducer'

function configureStore(state = { authState: {} }) {
    return createStore(rootReducer, state, applyMiddleware(reduxThunk));
}

export default configureStore;