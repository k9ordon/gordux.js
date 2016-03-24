// import CustomEvent from 'custom-event'; // CustomEvent polyfill

import { counterReducer } from "./reducer";

export let store = {
	counter: 0
};

var reducers = function(state, action) {
	return counterReducer(state, action);
}

document.addEventListener('action', function(e) {
	store = reducers(store, e.detail);
	document.dispatchEvent(new CustomEvent('state'));
}, false);
