import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import {incrementCount} from './actions/count'

const store = configureStore()

// store.subscribe(() => {
//     console.log(store.getState())
// })


const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
