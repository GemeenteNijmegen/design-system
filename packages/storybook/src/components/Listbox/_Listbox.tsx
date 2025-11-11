import '@gemeentenijmegen/components-css';
import '@utrecht/component-library-react/dist/css-module';

export const argTypes = {};

export const ListboxStory = () => {
  return (
    <div className="nijmegen-listbox" role="listbox" tabindex="0">
      <ul className="nijmegen-listbox__list" role="none">
        <li className="nijmegen-listbox__item" role="option">
          Option #1
        </li>
        <li className="nijmegen-listbox__item" role="option">
          Option #2
        </li>
        <li className="nijmegen-listbox__item" role="option">
          Option #3
        </li>
      </ul>
    </div>
  );
};
