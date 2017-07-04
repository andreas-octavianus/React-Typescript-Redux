import {createStore, combineReducers} from 'redux';
import {enthusiasm} from '../module/enthusiasm/reducer';
import {todoReducer} from '../module/todo/reducer';

export const appReducer = combineReducers({
    enthusiasm,
    todoReducer
});

export const store = createStore(appReducer);