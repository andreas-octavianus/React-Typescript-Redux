import * as React from 'react';
import './App.css';

import Hello from './module/enthusiasm/container/Hello';
import {createStore} from 'redux';
import {enthusiasm} from './module/enthusiasm/reducer/index';
import {StoreState} from './module/enthusiasm/type/index';
import {Provider} from 'react-redux';

const logo = require('./logo.svg');

const store = createStore<StoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript'
});

class App extends React.Component<{}, {}> {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Welcome to React</h2>
                    </div>
                    <p className="App-intro">
                        To get started, edit <code>src/App.tsx</code> and save to reload.
                        <Hello />
                    </p>
                </div>
            </Provider>
        );
    }
}

export default App;
