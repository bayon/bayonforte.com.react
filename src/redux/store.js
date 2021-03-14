import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import statusReducer from './reducers/statusReducer';


const rootReducer = combineReducers({
    auth: authReducer,   status: statusReducer
})

const middleware = composeWithDevTools(applyMiddleware(thunk))

export default createStore(rootReducer,middleware) 