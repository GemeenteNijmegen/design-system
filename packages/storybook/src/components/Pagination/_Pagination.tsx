import '@gemeentenijmegen/components-css';
import clsx from 'clsx';

export const argTypes = {
  next: {
    name: 'Volgende',
    control: 'object',
  },
  prev: {
    name: 'Vorige',
    control: 'object',
  },
  ellipses: {
    name: 'Toon ellipses',
    control: 'boolean',
  },
};

export const PaginationStory = ({
  next = { href: '', disabled: false },
  prev = { href: '', disabled: false },
  ellipses = false,
}) => {
  return (
    <nav className="nijmegen-pagination">
      {prev.disabled ? (
        <span
          className={clsx(
            'nijmegen-pagination__relative-link',
            'nijmegen-pagination__relative-link--prev',
            'nijmegen-pagination__relative-link--disabled',
          )}
          rel="prev"
        >
          <span>Vorige</span>
        </span>
      ) : (
        <a
          href={prev.href}
          className={clsx('nijmegen-pagination__relative-link', 'nijmegen-pagination__relative-link--prev')}
          rel="prev"
        >
          <span>Vorige</span>
        </a>
      )}

      <span role="group" className="nijmegen-pagination__pages">
        <a
          className="nijmegen-pagination__page-link nijmegen-pagination__page-link--current"
          aria-current="true"
          href="./1"
        >
          1
        </a>
        <a className="nijmegen-pagination__page-link" href="./2" rel="next">
          2
        </a>
        <a className="nijmegen-pagination__page-link" href="./3">
          3
        </a>

        {ellipses ? (
          <>
            <span className="nijmegen-pagination__ellipses">...</span>
            <a className="nijmegen-pagination__page-link" href="./99">
              99
            </a>
          </>
        ) : (
          <>
            <a className="nijmegen-pagination__page-link" href="./4">
              4
            </a>
            <a className="nijmegen-pagination__page-link" href="./5">
              5
            </a>
          </>
        )}
      </span>

      {next.disabled ? (
        <span
          className={clsx(
            'nijmegen-pagination__relative-link',
            'nijmegen-pagination__relative-link--next',
            'nijmegen-pagination__relative-link--disabled',
          )}
          rel="next"
        >
          <span>Volgende</span>
        </span>
      ) : (
        <a
          href={next.href}
          className={clsx('nijmegen-pagination__relative-link', 'nijmegen-pagination__relative-link--next')}
          rel="next"
        >
          <span>Volgende</span>
        </a>
      )}
    </nav>
  );
};
