/**
 * Creates a new HTML element.
 * 
 * @param {String} tag 
 * @param {String} className 
 * @returns {HTMLElement} An HTML element.
 */
export function h(tag, className) {
    const element = document.createElement(tag);
    element.classList.add(className);

    return element;
}