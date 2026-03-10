import '@gemeentenijmegen/components-css';
import { IconArchive, IconInbox, IconLayoutGrid, IconUser } from '@tabler/icons-react';

export const argTypes = {
  items: {
    control: 'object',
  },
};

export const SideNavigationStory = () => {
  return (
    <nav className="nijmegen-side-navigation">
      <ul className="nijmegen-side-navigation__list">
        <li className="nijmegen-side-navigation__item">
          <a
            aria-current="page"
            className="nijmegen-side-navigation__link nijmegen-side-navigation__link--current"
            href="#"
          >
            <IconLayoutGrid></IconLayoutGrid>
            Overzicht
          </a>
        </li>
      </ul>
      <ul className="nijmegen-side-navigation__list">
        <li className="nijmegen-side-navigation__item">
          <a className="nijmegen-side-navigation__link" href="#">
            <IconInbox></IconInbox>
            Berichten
          </a>
        </li>
        <li className="nijmegen-side-navigation__item">
          <a className="nijmegen-side-navigation__link" href="#">
            <IconArchive></IconArchive>
            Lopende zaken
          </a>
        </li>
      </ul>
      <ul className="nijmegen-side-navigation__list">
        <li className="nijmegen-side-navigation__item">
          <a className="nijmegen-side-navigation__link" href="#">
            <IconUser></IconUser>
            Gegevens
          </a>
        </li>
      </ul>
    </nav>
  );
};
