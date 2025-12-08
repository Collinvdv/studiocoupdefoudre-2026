"use strict";

/**
 * Class
 * =============================================================================
 */
let instance = null;

class Root {

	/* ====================================================================== *
	 * Constructor
	 * ====================================================================== */
	constructor() {
		if (!instance) {
			instance = this;
		}

		this.init();

		return instance;
	}

	/* ====================================================================== *
	 * Inits
	 * ====================================================================== */
	init() {
		this.el = document.body;
	}

	/* ====================================================================== *
	 * Helpers
	 * ====================================================================== */
	hasClass(name) {
		return this.el.classList.contains(name);
	}

	/* ====================================================================== *
	 * Handlers
	 * ====================================================================== */
	handleAddClass(name) {
		if (this.hasClass(name)) {
			return;
		}

		this.el.classList.add(name);
	}

	removeClass(name) {
		if (!this.hasClass(name)) {
			return;
		}

		this.el.classList.remove(name);
	}

	handleToggleClass(name) {
		const containsClass = this.hasClass(name);

		if (containsClass) {
			this.el.classList.remove(name);
		} else {
			this.el.classList.add(name);
		}
	}
}

export default new Root;
