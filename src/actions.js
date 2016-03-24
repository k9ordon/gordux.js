export const COUNT_UP = "COUNT_UP";
export function countUp() {
	return {
		detail: {
			type: COUNT_UP
		}
	};
}

export const  COUNT_DOWN = "COUNT_DOWN";
export function  countDown() {
	return {
		detail: {
			type: COUNT_DOWN
		}
	};
}
