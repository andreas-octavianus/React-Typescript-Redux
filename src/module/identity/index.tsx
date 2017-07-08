import * as React from 'react';
import {Component} from 'react';

import IdentityForm from './component/IdentityForm';

interface Props {

}

interface State {

}

export class IdentityPage extends Component<Props, State> {

    onSubmitClick() {
        console.log('on submit click was invoked');
    }

    render() {
        return (
            <div>
                <h1>Identity Page</h1>
                <hr/>
                <IdentityForm/>
            </div>
        );
    }

}