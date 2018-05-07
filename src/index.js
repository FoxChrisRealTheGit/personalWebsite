import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
