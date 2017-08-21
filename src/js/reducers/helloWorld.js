import { createReducer } from 'redux-act';
import * as Actions from '../actions/HelloWorldActions';
import { MESSAGES } from "../constants/HelloWorld";

const InitialState = {
	message: MESSAGES.DEFAULT,
};

export default createReducer({
	[Actions.changeText]: (state, message) => ({
		...state,
		message
	}),
}, InitialState);