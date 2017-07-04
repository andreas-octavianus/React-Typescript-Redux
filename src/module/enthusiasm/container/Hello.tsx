import Hello from '../component/Hello';
import * as actions from '../action/';
import {connect, Dispatch} from 'react-redux';

export function mapStateToProps(appState: any) {
    return {
        enthusiasmLevel: appState.enthusiasm.enthusiasmLevel,
        name: appState.enthusiasm.languageName
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm())
    };
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Hello);