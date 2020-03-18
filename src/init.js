import { App } from './app.js';

/**
 * Loads the application.
 */
window.onload = function() {
    const app = new App();
    this.document.body.append(app.render());
}