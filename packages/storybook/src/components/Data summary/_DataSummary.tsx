import '@gemeentenijmegen/components-css';
import { Link } from '@utrecht/component-library-react/dist/css-module';

export const argTypes = {
  items: {
    control: 'object',
    description: 'Array of description list items',
  },
};

export const DataSummaryStory = ({
  items = [],
}: {
  items?: Array<{
    title: string;
    details: string[];
    link?: {
      href: string;
      text: string;
      title: string;
    };
  }>;
}) => {
  return (
    <div className="nijmegen-description-list-container">
      <dl className="nijmegen-description-list">
        {items.map((item, index) => (
          <div key={index} className="nijmegen-description-list-item">
            <dt className="nijmegen-description-list__title">{item.title}</dt>
            {item.details.map((detail, detailIndex) => (
              <dd key={detailIndex} className="nijmegen-description-list__detail">
                {detail}
              </dd>
            ))}
            {item.link && (
              <dd className="nijmegen-description-list__detail">
                <Link href={item.link.href} title={item.link.title}>
                  {item.link.text}
                </Link>
              </dd>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
};
