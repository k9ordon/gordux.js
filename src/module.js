// import CustomEvent from 'custom-event';  // CustomEvent polyfill

import "./module.css";
import { store as state } from "./store";
import { countUp, countDown } from "./actions";

export class Module {
	constructor() {
		this.dom();
		this.events();
		this.render(state);
	}

	dom() {
		this.$buttonUp = document.querySelector('#buttonUp');
		this.$buttonDown = document.querySelector('#buttonDown');
		this.$counter = document.querySelector('#counter');
	}

	events() {
		// if button clicks
		this.$buttonUp.addEventListener('click', function(e) {
			document.dispatchEvent(new CustomEvent('action', { detail: countUp() }));
		});
		this.$buttonDown.addEventListener('click', function(e) {
			document.dispatchEvent(new CustomEvent('action', { detail: countDown() }));
		});

		// if state changes
		document.addEventListener('state', (e) => this.render());
	}

	render() {
		this.$counter.innerHTML = state.counter;
	}
}
