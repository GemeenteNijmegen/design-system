import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '@utrecht/component-library-react/dist/css-module';
import HtmlTransformer from '../../../../scripts/HtmlTransformer';
import '@gemeentenijmegen/components-css';

const MegaMenu = ({ columns = 4, full = false }) => {
  return (
    <div className="nijmegen-mega-menu">
      <div className="nijmegen-mega-menu__container">
        <div className={`nijmegen-mega-menu__content ${full ? 'nijmegen-mega-menu__content--full-width' : ''}`}>
          {[...Array(columns)].map((_, index) => (
            <div key={index}>
              <h4 className="utrecht-heading-4">Heading</h4>
              <ul className="nijmegen-link-list">
                <li className="nijmegen-link-list__item">
                  <a className="nijmegen-link-list__link" href="#">
                    Link 1
                  </a>
                </li>
                <li className="nijmegen-link-list__item">
                  <a className="nijmegen-link-list__link" href="#">
                    Link 2
                  </a>
                </li>
                <li className="nijmegen-link-list__item">
                  <a className="nijmegen-link-list__link" href="#">
                    Link 3
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const meta = {
  title: 'Components/Mega Menu/Html Implementation',
  id: 'html-mega-menu',
  component: MegaMenu,
  argTypes: {
    columns: {
      name: 'Columns',
      description: 'Number of columns in the mega menu',
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5],
    },
    full: {
      name: 'Full Width',
      description: 'Whether the mega menu should halve full with rows on all viewports',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
  },
  args: {
    columns: 4,
    full: false,
  },
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
