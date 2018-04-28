import { createStore, applyMiddleware } from 'redux';
import reducer from '../loginReducer/Reducer';
import 'babel-polyfill'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
store.runSaga = sagaMiddleware.run;
export default store;

