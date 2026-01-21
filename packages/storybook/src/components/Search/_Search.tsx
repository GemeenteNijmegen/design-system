import '@gemeentenijmegen/components-css';
import '@utrecht/components/button/css/index.scss';
import { IconSearch, IconX } from '@tabler/icons-react';
import '@gemeentenijmegen/web-components/dist/nijmegen-search.js';
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
  full: {
    name: 'Full width',
    control: 'boolean',
  },
  autocomplete: {
    name: 'Autocomplete',
    control: 'boolean',
    table: {
      disable: true,
    },
  },
};

export const SearchStoryWebComponent = ({
  icon = true,
  disabled = false,
  readOnly = false,
  dark = false,
  full = false,
  autocomplete = false,
  placeholder = 'Zoeken',
}) => {
  return (
    <nijmegen-search>
      <div className={clsx('nijmegen-search__container', full && 'nijmegen-search__container--full-width')}>
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
          />
          <button
            className="nijmegen-search__clear-button nijmegen-search__clear-button--hide"
            aria-label="Invoer wissen"
            title="Invoer wissen"
            tabIndex="-1"
          >
            <IconX />
          </button>
        </div>
        <button
          className={clsx(
            'utrecht-button utrecht-button--primary-action nijmegen-search__search-button',
            dark && 'nijmegen-search__search-button--dark',
          )}
        >
          {icon && <IconSearch />} Zoeken
        </button>

        <div
          className={clsx(
            'nijmegen-search__autocomplete-results',
            autocomplete && 'nijmegen-search__autocomplete-results--example',
          )}
        >
          <div className="nijmegen-listbox" role="listbox">
            <ul className="nijmegen-listbox__list" role="list"></ul>
          </div>
        </div>
      </div>
    </nijmegen-search>
  );
};

export const SearchStory = ({
  icon = true,
  disabled = false,
  readOnly = false,
  dark = false,
  full = false,
  autocomplete = false,
  placeholder = 'Zoeken',
}) => {
  return (
    <form className="nijmegen-search" method="GET" action="" role="search">
      <div className={clsx('nijmegen-search__container', full && 'nijmegen-search__container--full-width')}>
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
          />
          <button
            className="nijmegen-search__clear-button nijmegen-search__clear-button--hide"
            aria-label="Invoer wissen"
            title="Invoer wissen"
            tabIndex="-1"
          >
            <IconX />
          </button>
        </div>
        <button
          className={clsx(
            'utrecht-button utrecht-button--primary-action nijmegen-search__search-button',
            dark && 'nijmegen-search__search-button--dark',
          )}
        >
          {icon && <IconSearch />} Zoeken
        </button>

        <div
          className={clsx(
            'nijmegen-search__autocomplete-results',
            autocomplete && 'nijmegen-search__autocomplete-results--example',
          )}
        >
          <div className="nijmegen-listbox" role="listbox">
            <ul className="nijmegen-listbox__list" role="list"></ul>
          </div>
        </div>
      </div>
    </form>
  );
};
