import '@gemeentenijmegen/components-css';
import { ReactNode } from 'react';

export interface SideNavigationItem {
  text: string;
  href: string;
  icon?: ReactNode;
  current?: boolean;
  badge?: number;
}

export interface SideNavigationList {
  items: SideNavigationItem[];
}

export interface SideNavigationProps {
  lists: SideNavigationList[];
}

export const argTypes = {
  lists: {
    control: 'object',
  },
};

export const SideNavigationStory = ({ lists }: SideNavigationProps) => {
  return (
    <nav className="nijmegen-side-navigation">
      {lists?.map((list, listIndex) => (
        <ul key={listIndex} className="nijmegen-side-navigation__list">
          {list.items?.map((item, itemIndex) => (
            <li key={itemIndex} className="nijmegen-side-navigation__item">
              <a
                {...(item.current && { 'aria-current': 'page' })}
                className={`nijmegen-side-navigation__link${
                  item.current ? ' nijmegen-side-navigation__link--current' : ''
                }`}
                href={item.href}
              >
                {item.icon}
                <span className="nijmegen-side-navigation__link-label">{item.text}</span>
                {item.badge !== undefined && <span className="nijmegen-number-badge">{item.badge}</span>}
              </a>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
};
