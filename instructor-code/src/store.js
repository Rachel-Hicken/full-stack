import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './ducks/users';

let middleware = applyMiddleware(promiseMiddleware())

export default createStore(reducer, middleware);