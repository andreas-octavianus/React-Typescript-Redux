import {reducer} from 'redux-form';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import {createBrowserHistory} from 'history';
import {enthusiasm} from '../module/enthusiasm/reducer';
import {todoReducer} from '../module/todo/reducer';

export const history = createBrowserHistory();

const middleware = routerMiddleware(history);

export const appReducer = combineReducers({
    enthusiasm,
    todoReducer,
    form: reducer,
    router: routerReducer
});

export const store = createStore(appReducer, applyMiddleware(middleware));