import '../css/style.css';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './views/app.js';

import store from './store/store.js';
import { Provider } from 'react-redux';


render(
    <AppContainer>
        <Provider store={store}>
            <App/>
        </Provider>
    </AppContainer>,
  document.querySelector("#root")
);
