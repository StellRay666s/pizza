import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rooteReducer from './redusers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rooteReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
