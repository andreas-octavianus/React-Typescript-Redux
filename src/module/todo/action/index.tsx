import * as constant from '../const';

export interface AddTodo {
    type: constant.ADD_TODO;
    text: string;
}

export type TodoAction = AddTodo;

export function addTodo(text: string) {
    return {
        type: constant.ADD_TODO,
        text
    };
}