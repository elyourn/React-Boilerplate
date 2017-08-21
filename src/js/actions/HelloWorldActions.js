import { createAction } from 'redux-act';
import * as Types from './types/HelloWorldTypes';
import { MESSAGES } from "../constants/HelloWorld";

export const changeText = createAction(Types.CHANGE_MESSAGES, (currentText) => {
	return currentText !== MESSAGES.DEFAULT ?  MESSAGES.DEFAULT :  MESSAGES.ALT;
});