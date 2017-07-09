import * as React from 'react';
import {Component} from 'react';

import IdentityForm from './component/IdentityForm';
import {RouteComponentProps} from 'react-router';

interface Props {

}

interface State {

}

export class IdentityPage extends Component<Props & RouteComponentProps<any>, State> {

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