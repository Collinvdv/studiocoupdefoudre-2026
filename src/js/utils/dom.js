"use strict";

/**
 * Intialise all the DOM elements based on the selector
 * =============================================================================
 */
const initAll = (selector, jsClass, params) => {
	const els = document.querySelectorAll(selector);

	if (!els || els.length <= 0) {
		return null;
	}

	return Array.from(els).map((el) => {
		return new jsClass(el, params);
	});
};

/**
 * Exports
 * ============================================================================
 */
export default {
	initAll,
};
