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
    const input = this.querySelector('.nijmegen-search__input');
    const clearButton = this.querySelector('.nijmegen-search__clear-button');
    const resultsList = this.querySelector('.nijmegen-listbox__list');
    const resultsContainer = this.querySelector('.nijmegen-search__autocomplete-results');

    this.#initializeSearch(input, clearButton);
    if (resultsContainer && resultsContainer.classList.contains('nijmegen-search__autocomplete-results--example')) {
      this.#initializeAutocomplete(input, clearButton, resultsList, resultsContainer);
    }
  }

  #initializeSearch(input, clearButton) {
    if (input && clearButton) {
      input.addEventListener('input', () => {
        this.#toggleClearButton(input, clearButton);
      });

      clearButton.addEventListener('click', () => {
        input.value = '';
        this.#toggleClearButton(input, clearButton);
        input.focus();
      });
    }
  }

  #initializeAutocomplete(input, clearButton, resultsList, resultsContainer) {
    if (input && clearButton && resultsList && resultsContainer) {
      input.addEventListener('input', () => {
        if (input.value.trim().length >= 3) {
          this.#getAutocompleteResults(input.value, (results) => {
            this.#showResults(results, resultsList, resultsContainer);
          });
        } else {
          this.#hideResults(resultsList, resultsContainer);
        }
      });

      clearButton.addEventListener('click', () => {
        this.#hideResults(resultsList, resultsContainer);
      });
    }
  }

  #toggleClearButton(input, clearButton) {
    if (input.value.trim().length > 0) {
      clearButton.classList.remove('nijmegen-search__clear-button--hide');
    } else {
      clearButton.classList.add('nijmegen-search__clear-button--hide');
    }
  }

  #getAutocompleteResults(query, callback) {
    const cleanQuery = this.#cleanAutoCompleteQuery(query);
    const results = [
      { title: 'Finibus ' + cleanQuery, url: '?q=1_' + cleanQuery },
      { title: cleanQuery + ' elementum urna', url: '?q=2_' + cleanQuery },
    ];

    callback(results);
  }

  #showResults(results, resultsList, resultsContainer) {
    resultsList.innerHTML = results
      .map((result) => `<li><a href="${result.url}" class="nijmegen-listbox__item">${result.title}</a></li>`)
      .join('');
    resultsContainer.classList.add('nijmegen-search__autocomplete-results--show-results');
  }

  #hideResults(resultsList, resultsContainer) {
    resultsList.innerHTML = '';
    resultsContainer.classList.remove('nijmegen-search__autocomplete-results--show-results');
  }

  #cleanAutoCompleteQuery(query) {
    const p = document.createElement('p');
    p.innerText = query;
    return p.innerHTML;
  }
}

customElements.define('nijmegen-search', NijmegenSearch);
