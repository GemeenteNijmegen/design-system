import '@gemeentenijmegen/components-css';
import { Heading5 } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';

export const argTypes = {
  type: {
    control: { type: 'radio' },
    options: {
      'Ordered list': 'ol',
      'Unordered list': 'ul',
    },
  },
  items: {
    control: { type: 'object' },
  },
};

export const StepListStory = ({
  type = 'ol',
  items,
}: {
  type?: 'ul' | 'ol';
  items: Array<{
    title: string;
    content: React.ReactNode[];
  }>;
}) => {
  return React.createElement(
    type,
    { className: 'nijmegen-step-list' },
    ...items.map((item, index) => (
      <li key={index} className="nijmegen-step-list__item">
        <div className="nijmegen-step-list__header">
          <Heading5>{item.title}</Heading5>
        </div>
        <div className="nijmegen-step-list__body">
          {item.content.map((contentItem, contentIndex) => (
            <React.Fragment key={contentIndex}>{contentItem}</React.Fragment>
          ))}
        </div>
      </li>
    )),
  );
};
