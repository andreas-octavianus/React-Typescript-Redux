import {Hello} from '../component/Hello';
import * as actions from '../action/';
import {connect} from 'react-redux';

export function mapStateToProps(appState: any, ownProps: any) {
    return {
        enthusiasmLevel: appState.enthusiasm.enthusiasmLevel,
        name: appState.enthusiasm.languageName
    };
}

export function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);