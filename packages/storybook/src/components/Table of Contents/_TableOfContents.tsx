import '@gemeentenijmegen/components-css';
import '@utrecht/heading-4-css';

export const argTypes = {};

export const TableOfContentsStory = () => {
  return (
    <div className="nijmegen-table-of-contents">
      <h4 className="utrecht-heading-4">Op deze pagina</h4>
      <ul className="nijmegen-link-list">
        <li className="nijmegen-link-list__item">
          <a className="nijmegen-link-list__link" href="#">
            <span>Meenemen naar de afspraak</span>
          </a>
        </li>
        <li className="nijmegen-link-list__item">
          <a className="nijmegen-link-list__link" href="#">
            <span>Aanvragen</span>
          </a>
        </li>
        <li className="nijmegen-link-list__item">
          <a className="nijmegen-link-list__link" href="#">
            <span>Kosten</span>
          </a>
        </li>
        <li className="nijmegen-link-list__item">
          <a className="nijmegen-link-list__link" href="#">
            <span>Paspoort voor kinderen</span>
          </a>
        </li>
        <li className="nijmegen-link-list__item">
          <a className="nijmegen-link-list__link" href="#">
            <span>Paspoort met spoed aanvragen</span>
          </a>
        </li>
        <li className="nijmegen-link-list__item">
          <a className="nijmegen-link-list__link" href="#">
            <span>Zakenpaspoort</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
