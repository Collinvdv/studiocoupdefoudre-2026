"use strict";

/**
 * Imports
 * ============================================================================
 */
import { Toggle } from "../../extends";

/**
 * Class
 * ============================================================================
 */
class Navigation extends Toggle {

	/* ======================================================================= *
	* Constructor
	* ======================================================================= */
	constructor(el) {
		super("is-open");

		this.el = el;

		this.initBinds();
		this.init();
		this.initEvents();
	}

	/* ======================================================================= *
	* Inits
	* ======================================================================= */
	init() {
		super.init();

		this.hamburger = this.el.querySelector(".js-nav__toggle");
		this.body = document.querySelector("body");
	}

	initBinds() {
		this.handleToggle = this.handleToggle.bind(this);
	}

	initEvents() {
		this.hamburger.addEventListener("click", this.handleToggle);
	}

	/* ======================================================================= *
	* Handlers
	* ======================================================================= */
	handleToggle() {
		super.handleToggle();

		if (this.hamburger.classList.contains("is-active")) {
			this.hamburger.classList.remove("is-active");
			this.body.classList.remove("has-nav-open");
		} else {
			this.hamburger.classList.add("is-active");
			this.body.classList.add("has-nav-open");
		}
	}
}

export default Navigation;
