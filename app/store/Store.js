import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from './../middleware/logger';
import profileReducer from '../reducers/profileReducer';
import adminReducer from '../reducers/adminReducer';
import 'babel-polyfill'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware();
let reducer = combineReducers({profile: profileReducer, admin: adminReducer});
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));
store.runSaga = sagaMiddleware.run;
export default store;

