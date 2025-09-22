import '@gemeentenijmegen/components-css';
import clsx from 'clsx';

export const argTypes = {
  current: {
    name: 'Current',
    description: 'Disable the current page link',
    control: 'boolean',
    table: {
      defaultValue: '',
    },
  },
};

export const BreadcrumbStory = ({ current = true }) => {
  return (
    <nav aria-label="Broodkruimelnavigatie" className="nijmegen-breadcrumb">
      <a className="nijmegen-breadcrumb__link nijmegen-breadcrumb__link--mobile" href="https://nijmegen.nl/afval">
        <span itemProp="name" className="nijmegen-breadcrumb__text">
          Fruit
        </span>
      </a>

      <ol itemScope itemType="https://schema.org/BreadcrumbList" className="nijmegen-breadcrumb__list">
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="nijmegen-breadcrumb__item"
        >
          <a className="nijmegen-breadcrumb__link" href="https://nijmegen.nl">
            <span itemProp="name" className="nijmegen-breadcrumb__text">
              Home
            </span>
          </a>
          <meta content="1" itemProp="position" />
        </li>
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="nijmegen-breadcrumb__item"
        >
          <a className="nijmegen-breadcrumb__link" href="https://nijmegen.nl/afval">
            <span itemProp="name" className="nijmegen-breadcrumb__text">
              Supermarkt
            </span>
          </a>
          <meta content="2" itemProp="position" />
        </li>
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="nijmegen-breadcrumb__item"
        >
          <a className="nijmegen-breadcrumb__link" href="https://nijmegen.nl/afval">
            <span itemProp="name" className="nijmegen-breadcrumb__text">
              Vers
            </span>
          </a>
          <meta content="3" itemProp="position" />
        </li>
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="nijmegen-breadcrumb__item"
        >
          <a className="nijmegen-breadcrumb__link" href="https://nijmegen.nl/afval">
            <span itemProp="name" className="nijmegen-breadcrumb__text">
              Fruit
            </span>
          </a>
          <meta content="4" itemProp="position" />
        </li>
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="nijmegen-breadcrumb__item"
        >
          <a
            aria-current="page"
            className={clsx('nijmegen-breadcrumb__link', current && 'nijmegen-breadcrumb__link--disabled')}
            href="https://nijmegen.nl/afval/klikos"
          >
            <span itemProp="name" className="nijmegen-breadcrumb__text">
              Appel
            </span>
          </a>
          <meta content="5" itemProp="position" />
        </li>
      </ol>
    </nav>
  );
};
