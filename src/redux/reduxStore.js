import { applyMiddleware, compose, createStore } from 'redux';
// import Reducer1 from './reducers/SkillReducer';
import { thunk } from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default Store;
