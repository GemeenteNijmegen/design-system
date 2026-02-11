import html from './template.html?raw';

class NijmegenAccordion extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = html;

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    Array.from(this.children).forEach((child) => {
      const expandableElements = child.querySelectorAll('[aria-expanded]');
      expandableElements.forEach((element) => {
        element.addEventListener('click', (event) => {
          // Find the closest element with aria-expanded attribute
          let target = event.target.closest('[aria-expanded]');
          this.handleClick(target, expandableElements);
        });
      });
    });
  }

  handleClick(target, expandableElements) {
    expandableElements.forEach((element) => {
      if (element === target) {
        const section = target.closest('.utrecht-accordion__section');
        const panel = section ? section.querySelector('.utrecht-accordion__panel') : null;

        if (panel) {
          element.ariaExpanded = element.ariaExpanded === 'true' ? 'false' : 'true';
          panel.ariaHidden = element.ariaExpanded === 'false' ? 'true' : 'false';

          if (panel.ariaHidden === 'false') {
            panel.removeAttribute('hidden');
          } else {
            panel.setAttribute('hidden', '');
          }
        }
      }
    });
  }
}

if (!customElements.get('nijmegen-accordion')) {
  customElements.define('nijmegen-accordion', NijmegenAccordion);
}
