import '@gemeentenijmegen/components-css';

export const argTypes = {
  items: {
    control: 'object',
  },
};

export const DropdownMenuStory = ({
  items = [{ text: 'Placeholder', href: '#', lang: '#' }],
}: {
  items?: { text: string; href: string; lang?: string }[];
}) => {
  return (
    <div className="nijmegen-dropdown-menu">
      <ul className="nijmegen-dropdown-menu__list" role="list">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href} {...(item.lang && { lang: item.lang })} className="nijmegen-dropdown-menu__item">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
