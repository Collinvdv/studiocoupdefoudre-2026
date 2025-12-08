/**
 * Debounce
 * =============================================================================
 */
const debounce = (func, delay) => {
	let timeout = null;

	return (...args) => {
		const ctx = debounce;

		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(ctx, args), delay);
	};
};

/**
 * Exports
 * =============================================================================
 */
export default {
  debounce,
};
