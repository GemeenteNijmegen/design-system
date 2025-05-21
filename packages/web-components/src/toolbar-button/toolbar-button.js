import style from '@gemeentenijmegen/components-css/dist/index.min.css?raw';
import html from './template.html?raw';

class NijmegenToolbarButton extends HTMLElement {
  #type;
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = html;

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));

    const stylesheet = new CSSStyleSheet();
    stylesheet.replaceSync(style);
    shadowRoot.adoptedStyleSheets = [stylesheet];
  }

  static get observedAttributes() {
    return ['type'];
  }

  connectedCallback() {
    let typedButton = this.shadowRoot.querySelector('[class*="nijmegen-toolbar-button__icon"]');
    if (typedButton) {
      typedButton.addEventListener('click', (event) => {
        let target = event.target;
        if (event.target.nodeName === 'SLOT') {
          target = event.target.parentElement;
        }
        target.ariaExpanded = target.ariaExpanded === 'true' ? 'false' : 'true';
      });
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'type') {
      this.#handleType(newValue);
    }
  }

  #handleType(type) {
    if (type === 'menu') {
      this.shadowRoot.querySelector('.nijmegen-toolbar-button').classList.add('nijmegen-toolbar-button__icon-menu');
      this.shadowRoot
        .querySelector('.nijmegen-toolbar-button')
        .classList.remove('nijmegen-toolbar-button__icon-search');
    } else if (type === 'search') {
      this.shadowRoot.querySelector('.nijmegen-toolbar-button').classList.add('nijmegen-toolbar-button__icon-search');
      this.shadowRoot.querySelector('.nijmegen-toolbar-button').classList.remove('nijmegen-toolbar-button__icon-menu');
    } else {
      this.shadowRoot.querySelector('.nijmegen-toolbar-button').classList.remove('nijmegen-toolbar-button__icon-menu');
      this.shadowRoot
        .querySelector('.nijmegen-toolbar-button')
        .classList.remove('nijmegen-toolbar-button__icon-search');
    }
  }
}

customElements.define('nijmegen-toolbar-button', NijmegenToolbarButton);
