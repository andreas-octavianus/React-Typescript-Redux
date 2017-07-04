import * as React from 'react';
import {Component} from 'react';
import {Dispatch, connect} from 'react-redux';
import {addTodo, AddTodo, TodoAction} from '../action';

interface Props {
    todos?: string[];
    addTodo?: (text: string) => AddTodo;
}

interface State {

}

let inputText: HTMLInputElement | null;

class Page extends Component<Props, State> {

    onSubmit(event: React.FormEvent<any>) {
        event.preventDefault();
        if (this.props.addTodo !== undefined && inputText !== null) {
            this.props.addTodo(inputText.value);
            inputText.value = '';
        }
    }

    render() {
        let todos = this.props.todos !== undefined ?
            this.props.todos.map((todo, index) => { return (<li key={index}>{todo}</li>); }) :
            <li/>;
        return (
            <div>
                <h1>ToDo</h1>
                <form onSubmit={(event) => this.onSubmit(event)}>
                    <input type="text" ref={(input) => {inputText = input; }}/>
                    <button>Add ToDo</button>
                </form>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }

}

export function mapStateToProps(appState: any) {
    return {
        todos: appState.todoReducer.todos
    };
}

export function mapDispatchToProps(dispatch: Dispatch<TodoAction>) {
    return {
        addTodo: (text: string) => dispatch(addTodo(text))
    };
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
    return Object.assign({}, stateProps, dispatchProps, ownProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps) (Page);