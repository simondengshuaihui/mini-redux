import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from './my-react-redux'
// import {compose,applyMiddleware} from 'redux'
import {createStore} from './my-redux'
import {count} from './redux'
import thunk  from 'redux-thunk'

const store=createStore(count)

ReactDOM.render((<Provider store={store}>
    <App />
</Provider>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
