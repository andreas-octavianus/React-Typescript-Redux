import * as React from 'react';
import {Component} from 'react';
import './Hello.css';

export interface HelloProps {
    name: string;
    enthusiasmLevel: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export interface HelloState {

}

export class Hello extends Component<HelloProps, HelloState> {

    getExclamationMarks(numChars: number) {
        return Array(numChars + 1).join('!');
    }

    render() {
        const { name, enthusiasmLevel, onIncrement, onDecrement } = this.props;
        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic');
        }
        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + this.getExclamationMarks(enthusiasmLevel)}
                </div>
                <div>
                    <button onClick={onIncrement}>+</button>
                    <button onClick={onDecrement}>-</button>
                </div>
            </div>
        );
    }

}