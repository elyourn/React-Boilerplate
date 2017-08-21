import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import '../styles/structure.scss';
import configureStore from './store/configureStore';

import routes from './routes';
import App from "./ui/App";

const store = configureStore();
window.dispatch = store.dispatch;

const rootElement = document.getElementById('app');

ReactDOM.render(
	<Provider store={store} >
		<Router history={browserHistory} routes={routes(store)} />
	</Provider >, 
	rootElement
);
