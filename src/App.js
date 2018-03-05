import React from 'react';
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux';
import {store, history} from './store';

import './App.css';

import routes from './routes';

export const App = props => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="App">
                <div className="wrap">
                    {routes}
                </div>
            </div>
        </ConnectedRouter>
    </Provider>
);
