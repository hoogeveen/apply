import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../shared/js/store';
import App from '../shared/index';

hydrate((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));
