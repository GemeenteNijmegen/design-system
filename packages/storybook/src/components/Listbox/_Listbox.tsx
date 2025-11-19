import '@gemeentenijmegen/components-css';
import '@utrecht/component-library-react/dist/css-module';

export const argTypes = {
  items: {
    control: 'object',
  },
};

export const ListboxStory = ({
  items = [{ text: 'Placeholder', href: '#' }],
}: {
  items?: { text: string; href: string }[];
}) => {
  return (
    <div className="nijmegen-listbox" role="listbox">
      <ul className="nijmegen-listbox__list" role="list">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="nijmegen-listbox__item">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
