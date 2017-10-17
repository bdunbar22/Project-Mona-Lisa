/* Copyright 2017 Novartis Institutes for BioMedical Research Inc. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. */

import { Router } from 'react-router';
import { Provider } from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom';
import createStoreAndHistory from './store';
import routes from './routes';
import DevTools from './common/DevTools';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const { store, history } = createStoreAndHistory();

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                { routes }
            </Router>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('content')
);
