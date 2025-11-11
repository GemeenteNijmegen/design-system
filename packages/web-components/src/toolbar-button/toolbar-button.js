import style from '@gemeentenijmegen/components-css/toolbar-button/index.scss';
import html from './template.html';

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
    return ['type', 'aria-controls'];
  }

  connectedCallback() {
    let typedButton = this.shadowRoot.querySelector('[class*="nijmegen-toolbar-button--icon"]');
    if (typedButton) {
      typedButton.addEventListener('click', (event) => {
        let target = event.target;
        if (event.target.nodeName === 'SLOT') {
          target = event.target.parentElement;
        }
        target.ariaExpanded = target.ariaExpanded === 'true' ? 'false' : 'true';

        // control mobile menu visibility
        if (target.getAttribute('aria-controls')) {
          const elementId = target.getAttribute('aria-controls');
          if (elementId === 'mobile-menu') {
            const mobileMenu = document.getElementById(elementId);
            const visibleClass = 'nijmegen-header__mobile-menu--visible';
            const isExpanded = target.getAttribute('aria-expanded') === 'true';

            // Toggle menu visibility
            mobileMenu.classList.toggle(visibleClass, isExpanded);
          }
        }
      });
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'type') {
      this.#handleType(newValue);
    } else if (name === 'aria-controls') {
      const button = this.shadowRoot.querySelector('.nijmegen-toolbar-button');
      button.setAttribute('aria-controls', newValue);
    }
  }
  #handleType(type) {
    const button = this.shadowRoot.querySelector('.nijmegen-toolbar-button');
    if (type === 'menu') {
      button.classList.add('nijmegen-toolbar-button--icon-menu');
      button.classList.remove('nijmegen-toolbar-button--icon-search');
      button.ariaExpanded = 'false';
      button.ariaLabel = 'Menu openen';
    } else if (type === 'search') {
      button.classList.add('nijmegen-toolbar-button--icon-search');
      button.classList.remove('nijmegen-toolbar-button--icon-menu');
    } else {
      if (button.classList.contains('nijmegen-toolbar-button--icon-menu')) {
        button.classList.remove('nijmegen-toolbar-button--icon-menu');
        button.ariaLabel = 'Menu sluiten';
      } else if (button.classList.contains('nijmegen-toolbar-button--icon-search')) {
        button.classList.remove('nijmegen-toolbar-button--icon-search');
        button.ariaLabel = 'Zoeken sluiten';
      }
    }
  }
}

customElements.define('nijmegen-toolbar-button', NijmegenToolbarButton);
