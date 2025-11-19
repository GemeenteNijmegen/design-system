import style from '@gemeentenijmegen/components-css/menu.scss';
import html from './template.html';

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
        this.#updateAriaLabel(element);
        this.#updateTabOrder(element);
      } else {
        element.ariaExpanded = element.ariaExpanded === 'true' ? 'false' : 'true';
        this.#handleMobileMenu(target);
        this.#updateAriaLabel(element);
        this.#updateTabOrder(element);
      }
    });
  }

  #handleMobileMenu(button) {
    if (button.getAttribute('aria-controls') !== 'mobile-menu') return;

    const mobileMenu = document.getElementById('mobile-menu');
    const visibleClass = 'nijmegen-header__mobile-menu--visible';
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // Toggle menu visibility
    mobileMenu.classList.toggle(visibleClass, isExpanded);
  }

  #updateTabOrder(button) {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const isMenuButton = button.classList.contains('nijmegen-toolbar-button--icon-menu');

    if (isMenuButton) {
      const searchButton = this.querySelector('.nijmegen-toolbar-button--icon-search');
      const mobileMenu = document.getElementById('mobile-menu');
      const firstMenuItem = mobileMenu ? mobileMenu.querySelector('a, button') : null;

      if (isExpanded) {
        if (searchButton) searchButton.tabIndex = -1;
        if (firstMenuItem) firstMenuItem.tabIndex = 0;
      } else {
        if (searchButton) searchButton.tabIndex = 0;
        if (firstMenuItem) firstMenuItem.tabIndex = -1;
      }
    }
  }

  #updateAriaLabel(button) {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const isMenuButton = button.classList.contains('nijmegen-toolbar-button--icon-menu');
    const isSearchButton = button.classList.contains('nijmegen-toolbar-button--icon-search');

    if (isMenuButton) {
      button.ariaLabel = isExpanded ? 'Menu sluiten' : 'Menu openen';
    } else if (isSearchButton) {
      button.ariaLabel = isExpanded ? 'Zoeken sluiten' : 'Zoeken';
    }
  }
}

customElements.define('nijmegen-header', NijmegenHeader);
