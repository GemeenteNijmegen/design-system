import '@gemeentenijmegen/components-css';
import { Heading5, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';

export const argTypes = {
  title: {
    name: 'Title',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  text: {
    name: 'Text',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  children: {
    name: 'Buttons',
    defaultValue: '',
  },
};

export const ActioncardStory = ({
  title = '',
  text = '',
  children,
}: {
  title?: string;
  text?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="nijmegen-action-card">
      <div className="nijmegen-action-card__content">
        <Heading5>{title}</Heading5>
        <Paragraph>{text}</Paragraph>
      </div>
      <p role="group" className="utrecht-button-group">
        {children}
      </p>
    </div>
  );
};
