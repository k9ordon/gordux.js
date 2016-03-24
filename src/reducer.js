import { COUNT_UP, COUNT_DOWN } from "./actions";

export function counterReducer(state, action) {
	switch (action.type) {
		case COUNT_UP:
			return Object.assign(state, {
				counter: state.counter + 1
			});
		case COUNT_DOWN:
			return Object.assign(state, {
				counter: state.counter - 1
			});
		default:
			return state;
	}
}
