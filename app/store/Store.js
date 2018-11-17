import { createStore, applyMiddleware, combineReducers } from 'redux';
import profileReducer from '../reducers/profileReducer';
import adminReducer from '../reducers/adminReducer';
import 'babel-polyfill'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware();
let reducer = combineReducers({profile: profileReducer, admin: adminReducer});
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
store.runSaga = sagaMiddleware.run;
export default store;

