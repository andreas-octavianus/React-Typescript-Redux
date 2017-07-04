import {TodoState} from '../type';
import {TodoAction} from '../action';
import * as constant from '../const';

const initialState: TodoState = {
    todos: []
};

export function todoReducer(state: TodoState = initialState, action: TodoAction) {
    switch (action.type) {
        case constant.ADD_TODO:
            return Object.assign({}, {todos: [ ...state.todos, action.text ]});
        default: return state;
    }
}