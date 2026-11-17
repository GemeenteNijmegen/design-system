import '@gemeentenijmegen/components-css';
import '@utrecht/component-library-react/dist/css-module';
import { ReactNode } from 'react';

export const argTypes = {};

export const UnorderedListStory = ({ children }: { children?: ReactNode }) => {
  return (
    <ul role="list" className="nijmegen-unordered-list">
      {children}
    </ul>
  );
};
