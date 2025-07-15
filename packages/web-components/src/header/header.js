import style from '@gemeentenijmegen/components-css/dist/index.min.css?raw';
import html from './template.html?raw';

class NijmegenHeader extends HTMLElement {
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
      const expandableElements = child.querySelectorAll('[aria-expanded]:not(.nijmegen-mobile-menu__link)');
      expandableElements.forEach((element) => {
        element.addEventListener('click', (event) => {
          let target = event.target;
          this.#handleClick(target, expandableElements);
        });
      });
    });
  }

  #handleClick(target, expandableElements) {
    expandableElements.forEach((element) => {
      if (element !== target) {
        element.ariaExpanded = 'false';
        this.#handleMobileMenu(element);
      } else {
        element.ariaExpanded = element.ariaExpanded === 'true' ? 'false' : 'true';
        this.#handleMobileMenu(target);
      }
    });
  }

  #handleMobileMenu(button) {
    if (button.getAttribute('aria-controls') !== 'mobile-menu') return;

    const mobileMenu = document.getElementById('mobile-menu');
    const visibleClass = 'nijmegen-header__mobile-menu--visible';
    mobileMenu.classList.toggle(visibleClass, button.getAttribute('aria-expanded') === 'true');
  }
}

customElements.define('nijmegen-header', NijmegenHeader);
