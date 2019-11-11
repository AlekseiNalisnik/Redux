import React from 'react';
import { render } from 'react-dom';
import WebPage from './components/WebPage';
import { createStore } from 'redux';
import allReducers from '././reducers/index';
import { Provider } from 'react-redux';

const store = createStore(allReducers);

render( <Provider store={store}>
            <WebPage />
        </Provider>, document.getElementById('root'));       