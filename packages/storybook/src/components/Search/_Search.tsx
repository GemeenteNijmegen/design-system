import '@gemeentenijmegen/components-css';
import '@utrecht/components/button/css/index.scss';
import { IconSearch, IconX } from '@tabler/icons-react';
import clsx from 'clsx';

export const argTypes = {
  placeholder: {
    name: 'Placeholder',
    control: 'text',
  },
  disabled: {
    name: 'Disabled',
    control: 'boolean',
  },
  readOnly: {
    name: 'Read only',
    control: 'boolean',
  },
  icon: {
    name: 'Search icon',
    control: 'boolean',
    table: {
      disable: true,
    },
  },
  dark: {
    name: 'Dark mode',
    control: 'boolean',
  },
};

export const SearchStory = ({
  icon = true,
  disabled = false,
  readOnly = false,
  dark = false,
  placeholder = 'Zoeken',
}) => {
  return (
    <form className={clsx('nijmegen-search', dark && 'nijmegen-search--dark')} method="GET" action="" role="search">
      <div className="nijmegen-search__input-holder">
        <input
          className={clsx('nijmegen-search__input', disabled && 'nijmegen-search__input--disabled')}
          disabled={disabled}
          readOnly={readOnly}
          id="search"
          type="text"
          placeholder={placeholder}
          aria-controls="autocomplete-results"
          aria-autocomplete="both"
          aria-label="Zoekveld"
          aria-describedby="autocomplete-help-text"
        />
        <button
          className="nijmegen-search__clear-button nijmegen-search__button--hide"
          aria-label="Invoer wissen"
          title="Invoer wissen"
        >
          <IconX />
        </button>
      </div>
      <button
        className="utrecht-button utrecht-button--primary-action nijmegen-search__search-button"
        aria-label="Zoekknop"
      >
        {icon && <IconSearch />} Zoeken
      </button>
    </form>
  );
};
