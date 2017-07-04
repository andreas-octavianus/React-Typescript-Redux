import {createStore, combineReducers} from 'redux';
import {enthusiasm} from '../module/enthusiasm/reducer';

export const appReducer = combineReducers({
    enthusiasm
});

export const store = createStore(appReducer);