"use strict";

/**
 * Imports
 * =============================================================================
 */

import { Document } from "./managers";
import {
	Navigation,
	Gallery,
} from "./modules";

import { dom } from "./utils";

/**
 * Main initialise
 * initialise the different components for the general styleguide
 * =============================================================================
 */
const init = () => {
	if (typeof TweenLite !== "undefined") {
		TweenLite.ticker.fps(40);
	}

	dom.initAll(".js-nav", Navigation);

	dom.initAll(".js-gallery", Gallery);
};

/**
 * Execute main initialise when the Document is ready
 * =============================================================================
 */
(() => {
	Document.handleReadyState(init);
})();
