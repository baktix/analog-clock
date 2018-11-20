import React from 'react';
import { render } from 'react-dom';
import configureStore from '../store/configureStore';
import clock from './clock';

render(
    <Provider store={store}>
        <Clock />
    </Provider>,
    document.getElementById('app')
);
