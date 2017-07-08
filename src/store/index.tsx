import {createStore, combineReducers} from 'redux';
import {enthusiasm} from '../module/enthusiasm/reducer';
import {todoReducer} from '../module/todo/reducer';
import {reducer} from 'redux-form';

export const appReducer = combineReducers({
    enthusiasm,
    todoReducer,
    form: reducer
});

export const store = createStore(appReducer);