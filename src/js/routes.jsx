import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './ui/App';
import HelloWorldContainer from './ui/containers/HelloWorld';

export default (store) => (
	<Route path="/" component={App}>
		<IndexRoute component={HelloWorldContainer} />
		<Redirect from="*" to="404" />
	</Route>
);
