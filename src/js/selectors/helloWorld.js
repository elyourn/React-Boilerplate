import { createSelector } from 'reselect';

export const helloWorldStore = (store) => store.helloWorld;
export const getMessage = createSelector(
	helloWorldStore,
	(store) => store.message
);