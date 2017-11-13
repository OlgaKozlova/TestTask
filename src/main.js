import React from 'react';
import Immutable from 'immutable';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import createHistory from 'history/createHashHistory';
import * as reducers from './reducers.js';
import SubscriptionView from './views/SubscriptionView/SubscriptionView.jsx';
import WebFont from 'webfontloader';

const WebFontConfig = {
    google: {
        families: ['PT Sans:400,700:latin,cyrillic']
    }
};

WebFont.load(WebFontConfig);

const history = createHistory();
const rMiddleware = routerMiddleware(history);
const logger = createLogger({
    stateTransformer: (state) => {
        const newState = {};

        for (const i of Object.keys(state)) { // eslint-disable-line no-restricted-syntax
            if (Immutable.Iterable.isIterable(state[i])) {
                newState[i] = state[i].toJS();
            } else {
                newState[i] = state[i];
            }
        }

        return newState;
    },
});
const store = createStore(
    combineReducers(
        {
            ...reducers,
            routing: routerReducer,
        },
    ),
    applyMiddleware(rMiddleware, thunk, logger),
);

ReactDOM.render(
    // eslint-disable-next-line react/jsx-filename-extension
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Switch>
                    <Route exact path="/subscription" component={SubscriptionView} />
                    <Redirect from="/" exact to="/subscription" />
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>,
    window.document.getElementById('app'),
);
