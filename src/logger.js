import { store as state } from "./store";

document.addEventListener('action', (e) => {
	console.log("action", e.detail);
});

document.addEventListener('state', (e) => {
	console.log("state changed", state);
});
