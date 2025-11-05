import style from '@gemeentenijmegen/components-css/search/index.scss';
import html from './template.html';

class NijmegenSearch extends HTMLElement {
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
      const input = child.querySelector('.nijmegen-search__input');
      const clearButton = child.querySelector('.nijmegen-search__clear-button');

      if (input && clearButton) {
        input.addEventListener('input', () => {
          this.#toggleClearButton(input, clearButton);
        });

        input.addEventListener('keyup', () => {
          this.#toggleClearButton(input, clearButton);
        });

        clearButton.addEventListener('click', () => {
          input.value = '';
          this.#toggleClearButton(input, clearButton);
          input.focus();
        });
      }
    });
  }

  #toggleClearButton(input, clearButton) {
    if (input.value.trim().length > 0) {
      clearButton.classList.remove('nijmegen-search__clear-button--hide');
    } else {
      clearButton.classList.add('nijmegen-search__clear-button--hide');
    }
  }
}

customElements.define('nijmegen-search', NijmegenSearch);
