"use strict";

/**
 * Map a value from a certain range to a different range consisting out of a
 * minimum and a maximum value
 * =============================================================================
 */
const map = (value, low1, high1, low2, high2) => {
	/* eslint-disable-next-line no-mixed-operators */
	return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
};

/**
 * Calculate a random value between a minimum and maximum number
 * =============================================================================
 */
const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Exports
 * =============================================================================
 */
export default {
  map,
  randomBetween,
};
