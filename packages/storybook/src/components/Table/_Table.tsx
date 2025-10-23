import '@gemeentenijmegen/components-css';
import '@utrecht/components/link/css/index.scss';
import clsx from 'clsx';

export const argTypes = {
  fullTable: {
    control: 'boolean',
  },
  columns: {
    control: 'object',
  },
};

export const TableStory = ({
  fullTable,
  columns,
}: {
  fullTable: boolean;
  columns: Array<{ title: string; alignEnd: boolean; children: string[] }>;
}) => {
  return (
    <table className={clsx('nijmegen-table', fullTable && 'nijmegen-table-full-width')}>
      <caption className="nijmegen-table__caption">Afval ophaaldagen</caption>
      <thead className="nijmegen-table__header">
        <tr className="nijmegen-table__row">
          {columns.map((column, index) => (
            <th
              key={index}
              scope="col"
              className={clsx('nijmegen-table__header-cell', column.alignEnd && 'nijmegen-table__header-cell-end')}
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="nijmegen-table__body">
        {Array.from({ length: Math.max(...columns.map((col) => col.children.length)) }).map((_, rowIndex) => (
          <tr key={rowIndex} className="nijmegen-table__row">
            {columns.map((column, colIndex) => (
              <td
                key={colIndex}
                className={clsx('nijmegen-table__data-cell', column.alignEnd && 'nijmegen-table__data-cell-end')}
                data-label={column.title}
                dangerouslySetInnerHTML={{ __html: column.children[rowIndex] || '' }}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
