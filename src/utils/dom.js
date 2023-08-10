/**
 * Helper for making Elements with attributes
 *
 * @param  {string} tagName           - new Element tag name
 * @param  {Array|string} classNames  - list or name of CSS class
 * @param  {object} attributes        - any attributes
 * @returns {Element}
 */
export function make(tagName, classNames = null, attributes = {}) {
  const el = document.createElement(tagName);

  if (tagName === 'VIDEO' && attributes.src) {
    // eslint-disable-next-line no-tabs
    const videoSource = attributes.src;

    var elSource = document.createElement('source');

    elSource['src'] = videoSource;
    el.appendChild(elSource);


    delete attributes.loop;
    delete attributes.autoplay;
  }

  if (Array.isArray(classNames)) {
    el.classList.add(...classNames);
  } else if (classNames) {
    el.classList.add(classNames);
  }

  for (const attrName in attributes) {
    el[attrName] = attributes[attrName];
  }
  if (tagName === 'VIDEO') {
    el['controls'] = 'controls';
  }

  return el;
};
