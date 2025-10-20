class ToolbarButton {
  component;
  #toolbarButtonClass = '.nijmegen-theme nijmegen-toolbar-button';

  constructor() {
    this.component = document.querySelectorAll(this.#toolbarButtonClass);
    if (this.component) {
      this.#initToolbarButtonListeners();
    }
  }

  #initToolbarButtonListeners() {
    this.component.forEach((button) => {
      button.addEventListener(
        'click',
        (event) => {
          this.toolbarButtonClickHandler(event);
        },
        { once: true },
      );
    });
  }

  static toolbarButtonClickHandler(event) {
    event.target.ariaExpanded = event.target.ariaExpanded === 'true' ? 'false' : 'true';
  }
}

export default ToolbarButton;
