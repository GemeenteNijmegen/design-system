import '@gemeentenijmegen/components-css';
// import clsx from 'clsx';

export const argTypes = {};

export const TableStory = () => {
  return (
    <table className="nijmegen-table">
      <caption className="nijmegen-table__caption">Caption</caption>
      <thead className="nijmegen-table__header">
        <tr className="nijmegen-table__row">
          <th scope="col" className="nijmegen-table__header-cell">
            Wijk
          </th>
          <th scope="col" className="nijmegen-table__header-cell">
            Afvalsoort
          </th>
          <th scope="col" className="nijmegen-table__header-cell">
            Ophaaldag
          </th>
        </tr>
      </thead>
      <tbody className="nijmegen-table__body">
        <tr className="nijmegen-table__row">
          <td className="nijmegen-table__cell" data-label="Wijk">
            Nijmegen-Oost
          </td>
          <td className="nijmegen-table__cell" data-label="Afvalsoort">
            Restafval
          </td>
          <td className="nijmegen-table__cell" data-label="Ophaaldag">
            Maandag
          </td>
        </tr>
        <tr className="nijmegen-table__row">
          <td className="nijmegen-table__cell" data-label="Wijk">
            Dukenburg
          </td>
          <td className="nijmegen-table__cell" data-label="Afvalsoort">
            Papier & karton
          </td>
          <td className="nijmegen-table__cell" data-label="Ophaaldag">
            Woensdag
          </td>
        </tr>
        <tr className="nijmegen-table__row">
          <td className="nijmegen-table__cell" data-label="Wijk">
            Lindenholt
          </td>
          <td className="nijmegen-table__cell" data-label="Afvalsoort">
            GFT
          </td>
          <td className="nijmegen-table__cell" data-label="Ophaaldag">
            Donderdag
          </td>
        </tr>
        <tr className="nijmegen-table__row">
          <td className="nijmegen-table__cell" data-label="Wijk">
            Nijmegen-Noord
          </td>
          <td className="nijmegen-table__cell" data-label="Afvalsoort">
            Grofvuil
          </td>
          <td className="nijmegen-table__cell" data-label="Ophaaldag">
            Maandag
          </td>
        </tr>
      </tbody>
    </table>
  );
};
