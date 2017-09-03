import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.js';

import '../css/style.css';

render(
    <AppContainer>
        <App/>
    </AppContainer>,
  document.querySelector("#root")
);
