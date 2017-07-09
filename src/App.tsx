import * as React from 'react';
import './App.css';

import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {Switch, Route} from 'react-router';
import {Link} from 'react-router-dom';
import {history, store} from './store';

import Hello from './module/enthusiasm/container/Hello';
import TodoPage from './module/todo/component';
import {IdentityPage} from './module/identity';

const logo = require('./logo.svg');

class App extends React.Component<{}, {}> {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div className="App">
                        <div className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <h2>Welcome to React</h2>
                        </div>
                        <p className="App-intro">
                            To get started, edit <code>src/App.tsx</code> and save to reload.
                        </p>
                        <Link to={'/'}>Hello</Link>
                        {' | '}
                        <Link to={'/todo'}>Todo</Link>
                        {' | '}
                        <Link to={'/identity'}>Identity</Link>
                        <Switch>
                            <Route exact={true} path="/" component={Hello}/>
                            <Route exact={true} path="/todo" component={TodoPage}/>
                            <Route exact={true} path="/identity" component={IdentityPage}/>
                        </Switch>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
