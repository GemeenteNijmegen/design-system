import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '@utrecht/component-library-react/dist/css-module';
import HtmlTransformer from '../../../../scripts/HtmlTransformer';

const MegaMenu = () => {
  return (
    <div className="nijmegen-mega-menu">
      <div className="nijmegen-mega-menu__container">
        <div className="nijmegen-mega-menu__content">
          <div>
            <h4 className="utrecht-heading-4">Heading</h4>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
          <div>
            <h4 className="utrecht-heading-4">Heading</h4>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
          <div>
            <h4 className="utrecht-heading-4">Heading</h4>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
          <div>
            <h4 className="utrecht-heading-4">Heading</h4>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
          <div>
            <h4 className="utrecht-heading-4">Heading</h4>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
const meta = {
  title: 'Components/Mega Menu/Html Implementation',
  id: 'html-mega-menu',
  component: MegaMenu,
  argTypes: {},
  args: {},
  parameters: {
    status: {
      type: 'BETA',
    },
    docs: {
      source: {
        transform: HtmlTransformer,
      },
    },
  },
} satisfies Meta<typeof Link>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
