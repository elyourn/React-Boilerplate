import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import helloWorld from './helloWorld';

const appReducer = combineReducers({
	helloWorld,
	routing, // name 'routing' is important!
});

function rootReducer(state, action) {
	return appReducer(state, action);
}

export default rootReducer;
