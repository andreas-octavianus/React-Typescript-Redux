import {EnthusiasmAction} from '../action';
import {HelloState} from '../type/index';
import {INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM} from '../constant/index';

const initialState: HelloState = {
    enthusiasmLevel: 1,
    languageName: 'TypeScript'
};

export function enthusiasm(state: HelloState = initialState, action: EnthusiasmAction): HelloState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return {...state, enthusiasmLevel: state.enthusiasmLevel + 1};
        case DECREMENT_ENTHUSIASM:
            return {...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)};
        default:
            return state;
    }
}