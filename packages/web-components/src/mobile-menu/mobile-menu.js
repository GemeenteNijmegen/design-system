import style from '@gemeentenijmegen/components-css/dist/index.min.css?raw';
import html from './template.html?raw';

class NijmegenMobileMenu extends HTMLElement {
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

  connectedCallback() {
    Array.from(this.children).forEach((child) => {
      const expandableElements = child.querySelectorAll('[aria-expanded]');
      const panelElements = child.querySelectorAll('[data-panel]');

      console.log('expandableElements ' + expandableElements.length);
      console.log('panelElements ' + panelElements.length);

      // Expandable elements
      expandableElements.forEach((element) => {
        element.addEventListener('click', (event) => {
          let target = event.target.closest('[aria-expanded]');
          if (target) {
            this.#handleExpandableClick(target, expandableElements);
          }
        });
      });

      // Sub menu
      panelElements.forEach((element) => {
        element.addEventListener('click', (event) => {
          let target = event.target.closest('[data-panel]');
          if (target) {
            this.#handlePanelClick(target, panelElements);
          }
        });
      });
    });
  }

  #handleExpandableClick(target, elements) {
    elements.forEach((element) => {
      if (element === target) {
        if (element.ariaExpanded === 'true') {
          element.ariaExpanded = 'false';
          element.parentElement.classList.remove('nijmegen-mobile-menu__details--open');
        } else {
          element.ariaExpanded = 'true';
          element.parentElement.classList.add('nijmegen-mobile-menu__details--open');
        }
      }
    });
  }

  #handlePanelClick(target, elements) {
    elements.forEach((element) => {
      if (element === target) {
        const liParent = element.closest('li');
        const panel = liParent.querySelector('.nijmegen-mobile-menu__panel');
        panel.classList.toggle('nijmegen-mobile-menu__panel--active');
      }
    });
  }
}

customElements.define('nijmegen-mobile-menu', NijmegenMobileMenu);
