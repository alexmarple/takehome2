import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import patientReducer from '../reducers';

const store = createStore(patientReducer, applyMiddleware(thunk));

export default store;
