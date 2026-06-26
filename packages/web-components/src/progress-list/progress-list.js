import style from '@gemeentenijmegen/components-css/progress-list/index.scss';
import html from './template.html';

class NijmegenProgressList extends HTMLElement {
  static get observedAttributes() {
    return ['full'];
  }

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
        const button = event.target.closest('.nijmegen-progress-list__button[aria-expanded]');
        if (button) {
          this.#handleToggle(button);
        }
      });
    });
  }

  #handleToggle(button) {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const step = button.closest('.nijmegen-progress-list__step');

    button.setAttribute('aria-expanded', String(!isExpanded));
    this.#updateAriaLabel(button, !isExpanded);

    if (step) {
      step.classList.toggle('nijmegen-progress-list__step--active', !isExpanded);

      const meta = step.querySelector('.nijmegen-progress-list__meta');
      if (meta) {
        meta.hidden = isExpanded;
      }

      const details = step.querySelector('.nijmegen-progress-list__details');
      if (details) {
        details.hidden = isExpanded;
      }
    }
  }

  #updateAriaLabel(button, isExpanded) {
    const baseText = button.textContent?.trim() || '';

    if (isExpanded) {
      button.setAttribute('aria-label', `${baseText} - Details verbergen`);
    } else {
      button.setAttribute('aria-label', `${baseText} - Details tonen`);
    }
  }
}

customElements.define('nijmegen-progress-list', NijmegenProgressList);
