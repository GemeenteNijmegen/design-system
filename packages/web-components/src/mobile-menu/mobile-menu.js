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
      child.addEventListener('click', (event) => {
        const expandableTarget = event.target.closest('[aria-expanded]');
        if (expandableTarget && !expandableTarget.hasAttribute('data-panel')) {
          this.#handleExpandableClick(expandableTarget);
          return;
        }

        const panelTarget = event.target.closest('[data-panel]');
        if (panelTarget) {
          this.#handlePanelClick(panelTarget, false);
        }
      });

      child.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          const panelTarget = event.target.closest('[data-panel]');
          if (panelTarget) {
            event.preventDefault();
            this.#handlePanelClick(panelTarget, true);
          }
        }
      });

      child.addEventListener('focusout', (event) => {
        // Timeout is needed to allow the new focus to be set
        setTimeout(() => {
          this.#handleFocusOut(event.target);
        }, 0);
      });
    });
  }

  #handleFocusOut(formerFocusedElement) {
    const panel = formerFocusedElement.closest('.nijmegen-mobile-menu__panel');
    if (!panel) return;

    const currentFocusedElement = document.activeElement;
    const inPanel = currentFocusedElement && panel.contains(currentFocusedElement);

    if (!inPanel) {
      this.#closeSubmenu(panel);
    }
  }

  #closeSubmenu(panel) {
    const li = panel.closest('li');
    const button = li?.querySelector('[aria-expanded]');

    if (button && button.ariaExpanded === 'true') {
      button.ariaExpanded = 'false';
      panel.classList.remove('nijmegen-mobile-menu__panel--active');
    }
  }

  #handleExpandableClick(target) {
    const isExpanded = target.ariaExpanded === 'true';
    const parentElement = target.parentElement;

    target.ariaExpanded = isExpanded ? 'false' : 'true';
    parentElement.classList.toggle('nijmegen-mobile-menu__details--open', !isExpanded);
  }

  #handlePanelClick(target, isKeyboard) {
    const li = target.closest('li');
    const button = li?.querySelector('[aria-expanded]');
    const panel = li?.querySelector('.nijmegen-mobile-menu__panel');

    if (!button || !panel) return;

    const isExpanded = button.ariaExpanded === 'true';
    button.ariaExpanded = isExpanded ? 'false' : 'true';
    panel.classList.toggle('nijmegen-mobile-menu__panel--active', !isExpanded);

    if (isKeyboard) {
      if (!isExpanded) {
        const firstSubItem = panel.querySelector('a, button');
        firstSubItem?.focus();
      } else {
        button.focus();
      }
    }
  }
}

customElements.define('nijmegen-mobile-menu', NijmegenMobileMenu);
