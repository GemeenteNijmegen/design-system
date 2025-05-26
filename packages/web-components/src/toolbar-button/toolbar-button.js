import style from '@gemeentenijmegen/components-css/dist/index.min.css?raw';
import html from './template.html?raw';

class NijmegenToolbarButton extends HTMLElement {
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
    const button = this.shadowRoot.querySelector('.nijmegen-toolbar-button');
    if (type === 'menu') {
      button.classList.add('nijmegen-toolbar-button__icon-menu');
      button.classList.remove('nijmegen-toolbar-button__icon-search');
      button.ariaExpanded = 'false';
      button.ariaLabel = 'Menu openen';
    } else if (type === 'search') {
      button.classList.add('nijmegen-toolbar-button__icon-search');
      button.classList.remove('nijmegen-toolbar-button__icon-menu');
    } else {
      if (button.classList.contains('nijmegen-toolbar-button__icon-menu')) {
        button.classList.remove('nijmegen-toolbar-button__icon-menu');
        button.ariaLabel = 'Menu sluiten';
      } else if (button.classList.contains('nijmegen-toolbar-button__icon-search')) {
        button.classList.remove('nijmegen-toolbar-button__icon-search');
        button.ariaLabel = 'Zoeken sluiten';
      }
    }
  }
}

customElements.define('nijmegen-toolbar-button', NijmegenToolbarButton);
