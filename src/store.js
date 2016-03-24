import { counterReducer } from "./reducer";
// import CustomEvent from 'custom-event';

export let state = {
	counter: 0
};

var reducers = function(state, action) {
	return counterReducer(state, action);
}

document.addEventListener('action', function(e) {
	state = reducers(state, e.detail);
	document.dispatchEvent(new CustomEvent('state'));
}, false);
