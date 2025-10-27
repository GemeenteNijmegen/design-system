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
    <nav className="nijmegen-pagination" aria-label="Pagina navigation">
      <ul className="nijmegen-pagination-list">
        {prev.disabled ? (
          <li>
            {/* <span
              className={clsx(
                'nijmegen-pagination__relative-link',
                'nijmegen-pagination__relative-link--prev',
                'nijmegen-pagination__relative-link--disabled',
              )}
              rel="prev"
            >
              <span>Vorige</span>
            </span> */}
            <span className="nijmegen-sr-only">Vorige is niet mogelijk</span>
          </li>
        ) : (
          <li>
            <a
              href={prev.href}
              className={clsx('nijmegen-pagination__relative-link', 'nijmegen-pagination__relative-link--prev')}
              rel="prev"
            >
              <span>Vorige</span>
            </a>
          </li>
        )}

        <li>
          <a
            className="nijmegen-pagination__page-link nijmegen-pagination__page-link--current"
            aria-current="true"
            href="./1"
          >
            1<span className="nijmegen-sr-only">(huidig)</span>
          </a>
        </li>
        <li>
          <a className="nijmegen-pagination__page-link" href="./2" rel="next">
            2
          </a>
        </li>
        <li>
          <a className="nijmegen-pagination__page-link" href="./3">
            3
          </a>
        </li>

        {ellipses ? (
          <>
            <li>
              <span className="nijmegen-pagination__ellipses">...</span>
            </li>
            <li>
              <a className="nijmegen-pagination__page-link" href="./99">
                99
              </a>
            </li>
          </>
        ) : (
          <>
            <li>
              <a className="nijmegen-pagination__page-link" href="./4">
                4
              </a>
            </li>
            <li>
              <a className="nijmegen-pagination__page-link" href="./5">
                5
              </a>
            </li>
          </>
        )}

        {next.disabled ? (
          <li>
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
          </li>
        ) : (
          <li>
            <a
              href={next.href}
              className={clsx('nijmegen-pagination__relative-link', 'nijmegen-pagination__relative-link--next')}
              rel="next"
            >
              <span>Volgende</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};
