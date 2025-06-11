import type { Meta, StoryObj } from '@storybook/react';
import {
  IconArrowRight,
  IconChevronDown,
  IconChevronLeft,
  IconExternalLink,
  IconUser,
  IconWorld,
} from '@tabler/icons-react';
import { Link } from '@utrecht/component-library-react/dist/css-module';
import HtmlTransformer from '../../../../scripts/HtmlTransformer';
import '@gemeentenijmegen/components-css';

const MobileMenu = () => {
  return (
    <nav className="nijmegen-mobile-menu">
      <ul className="nijmegen-mobile-menu__list">
        <li>
          <a
            href="/"
            target="_self"
            className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--strong nijmegen-mobile-menu__link--current"
          >
            Home
          </a>
        </li>
        <li>
          <div className="nijmegen-mobile-menu__details nijmegen-mobile-menu__details--open--">
            <button
              aria-expanded="false"
              className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--strong nijmegen-mobile-menu__link--expanded--"
            >
              <span>Onderwerpen</span> <IconChevronDown />
            </button>
            <ul className="nijmegen-mobile-menu__list">
              <li>
                <button aria-expanded="false" className="nijmegen-mobile-menu__link">
                  <span>Omgeving</span> <IconArrowRight />
                </button>
                <div className="nijmegen-mobile-menu__panel nijmegen-mobile-menu__panel--active--">
                  <button className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--back">
                    <span>
                      <IconChevronLeft /> Omgeving
                    </span>
                  </button>
                  <ul className="nijmegen-mobile-menu__list">
                    <li>
                      <a href="/" target="_self" className="nijmegen-mobile-menu__link">
                        Parkeren
                      </a>
                    </li>
                    <li>
                      <a href="/" target="_self" className="nijmegen-mobile-menu__link">
                        Afval
                      </a>
                    </li>
                    <li>
                      <a href="/" target="_self" className="nijmegen-mobile-menu__link">
                        Veiligheid
                      </a>
                    </li>
                    <li>
                      <a href="/" target="_self" className="nijmegen-mobile-menu__link">
                        Natuur en milieu
                      </a>
                    </li>
                    <li>
                      <a href="/" target="_self" className="nijmegen-mobile-menu__link">
                        Verkeer en vervoer
                      </a>
                    </li>
                  </ul>

                  <div>TODO: Divider</div>
                </div>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <a href="/" className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--strong">
            Ondernemers
          </a>
        </li>
      </ul>

      <div>TODO: Divider</div>

      <ul className="nijmegen-mobile-menu__list">
        <li>
          <div className="nijmegen-mobile-menu__details">
            <button
              aria-expanded="false"
              className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--strong nijmegen-mobile-menu__link--small"
            >
              <span>
                <IconWorld /> Nederlands
              </span>{' '}
              <IconChevronDown />
            </button>
            <ul className="nijmegen-mobile-menu__list">
              <li>
                <a href="/" target="_self" className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--small">
                  English (Engels)
                </a>
              </li>
              <li>
                <a href="/" target="_self" className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--small">
                  Deutsch (Duits)
                </a>
              </li>
              <li>
                <a href="/" target="_self" className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--small">
                  Français (Frans)
                </a>
              </li>
              <li>
                <a href="/" target="_self" className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--small">
                  Türkçe (Turks)
                </a>
              </li>
              <li>
                <a href="/" target="_self" className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--small">
                  العربية (Arabisch){' '}
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a
            href="/"
            target="_blank"
            className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--strong nijmegen-mobile-menu__link--small"
          >
            <span>
              <IconUser /> Mijn Nijmegen
            </span>{' '}
            <IconExternalLink />
          </a>
        </li>
      </ul>
    </nav>
  );
};
const meta = {
  title: 'Components/Mobile Menu/Html Implementation',
  id: 'html-mobile-menu',
  component: MobileMenu,
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
