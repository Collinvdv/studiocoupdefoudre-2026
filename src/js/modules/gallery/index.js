"use strict";

/**
 * Imports
 * ============================================================================
 */
import GLightbox from "glightbox";

/**
 * Class
 * ============================================================================
 */
class Gallery {

	/* ======================================================================= *
	* Constructor
	* ======================================================================= */
	constructor(el) {
		this.el = el;

		this.init();
	}

	/* ======================================================================= *
	* Inits
	* ======================================================================= */
	init() {
		/**
		 * IMPORTANT NOTE:
		 * Using Glightbox version 2.0.4.
		 *
		 * More info: https://github.com/biati-digital/glightbox
		 *
		 * More recent versions have breaking changes, especially when using
		 * "selector" (as we are using in this case). Make sure to update
		 * this code, when updating the package.
		*/
		new GLightbox({
			selector: "js-gallery__item",
		});
	}
}

export default Gallery;
