import style from '@gemeentenijmegen/components-css/header/index.scss';
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

    // Add backdrop click handler
    const backdrop = this.querySelector('.nijmegen-header__backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', () => {
        this.#closeAllMenus();
      });
    }
  }

  #handleClick(target, expandableElements) {
    expandableElements.forEach((element) => {
      if (element !== target) {
        element.ariaExpanded = 'false';
      } else {
        element.ariaExpanded = element.ariaExpanded === 'true' ? 'false' : 'true';
      }

      this.#handleContainerToggle(element);
      this.#updateAriaLabel(element);
      this.#updateTabOrder(element);
    });

    // Handle backdrop visibility
    this.#updateBackdrop();
  }

  #handleContainerToggle(button) {
    const controlsId = button.getAttribute('aria-controls');
    if (!controlsId) return;

    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    const containers = {
      'mobile-menu': {
        element: document.getElementById('mobile-menu'),
        visibleClass: 'nijmegen-header__mobile-menu--visible',
        buttonClass: 'nijmegen-toolbar-button--icon-menu',
      },
      'search-container': {
        element: document.getElementById('search-container'),
        visibleClass: 'nijmegen-header__mobile-menu--visible',
        buttonClass: 'nijmegen-toolbar-button--icon-search',
      },
    };

    const currentContainer = containers[controlsId];
    if (!currentContainer?.element) return;

    currentContainer.element.classList.toggle(currentContainer.visibleClass, isExpanded);

    if (isExpanded) {
      Object.entries(containers).forEach(([id, config]) => {
        if (id !== controlsId && config.element) {
          config.element.classList.remove(config.visibleClass);

          const otherButton = this.querySelector(`.${config.buttonClass}`);
          if (otherButton) {
            otherButton.ariaExpanded = 'false';
            this.#updateAriaLabel(otherButton);
          }
        }
      });
    }
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

  #hasSmallPanel(button) {
    // Check if the button's next sibling is a small panel
    const panel = button.nextElementSibling;
    if (panel && panel.classList.contains('nijmegen-header__panel--small')) {
      return true;
    }

    return false;
  }

  #updateBackdrop() {
    const backdrop = this.querySelector('.nijmegen-header__backdrop');
    if (!backdrop) return;

    // Check ALL expandable elements in the component
    const allExpandableElements = this.querySelectorAll('[aria-expanded]:not(.nijmegen-mobile-menu__link)');

    const anyExpanded = Array.from(allExpandableElements).some((element) => {
      const isExpanded = element.getAttribute('aria-expanded') === 'true';

      // Ignore small panels
      if (this.#hasSmallPanel(element)) {
        return false;
      }

      return isExpanded;
    });

    backdrop.classList.toggle('nijmegen-header__backdrop--visible', anyExpanded);
  }

  #closeAllMenus() {
    const expandableElements = this.querySelectorAll('[aria-expanded="true"]:not(.nijmegen-mobile-menu__link)');

    expandableElements.forEach((element) => {
      element.ariaExpanded = 'false';
      this.#handleContainerToggle(element);
      this.#updateAriaLabel(element);
      this.#updateTabOrder(element);
    });

    this.#updateBackdrop();
  }
}

customElements.define('nijmegen-header', NijmegenHeader);
