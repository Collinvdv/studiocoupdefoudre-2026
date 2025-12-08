"use strict";

/**
 * Class
 * =============================================================================
 */
class Toggle {

	/* ====================================================================== *
	 * Constructor
	 * ====================================================================== */
	constructor(toggleClass) {
		this.toggleClass = toggleClass;
	}

	/* ====================================================================== *
	 * Inits
	 * ====================================================================== */
	init() {
		this.isToggled = this.el.classList.contains(this.toggleClass);
	}

	/* ====================================================================== *
	 * Handlers
	 * ====================================================================== */
	handleToggle(e) {
		if (e) {
			e.preventDefault();
		}

		this.isToggled = !this.isToggled;

		if (this.isToggled) {
			this.handleEnable();
		} else {
			this.handleDisable();
		}
	}
	handleEnable() {
		this.el.classList.add(this.toggleClass);

		this.isToggled = true;
	}

	handleDisable() {
		this.el.classList.remove(this.toggleClass);

		this.isToggled = false;
	}
}

export default Toggle;
