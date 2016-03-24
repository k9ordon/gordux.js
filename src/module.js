import { state } from "./store";
import { countUp, countDown } from "./actions";
// import CustomEvent from 'custom-event';

import "./module.css";

export class Module {
  constructor() {
    this.dom();
    this.events();
    this.render();
  }

  dom() {
    this.$buttonUp = document.querySelector('#buttonUp');
    this.$buttonDown = document.querySelector('#buttonDown');
    this.$counter = document.querySelector('#counter');
  }

  events() {
	// if button clicks
	this.$buttonUp.addEventListener('click', function(e) {
		document.dispatchEvent(new CustomEvent('action', countUp()));
	});
    this.$buttonDown.addEventListener('click', function(e) {
		document.dispatchEvent(new CustomEvent('action', countDown()));
	});

	// if state changes
	document.addEventListener('state', (e) => this.update());
  }

  update() {
	this.$counter.innerHTML = state.counter;
  }

  render() {
    return this.update();
  }
}
