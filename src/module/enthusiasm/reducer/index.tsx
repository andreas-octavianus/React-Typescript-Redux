import {EnthusiasmAction} from '../action';
import {StoreState} from '../type/index';
import {INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM} from '../constant/index';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return {...state, enthusiasmLevel: state.enthusiasmLevel + 1};
        case DECREMENT_ENTHUSIASM:
            return {...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)};
        default:
            return state;
    }
}