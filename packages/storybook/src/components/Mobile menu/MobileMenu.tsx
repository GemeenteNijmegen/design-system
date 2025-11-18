import { IconExternalLink, IconUser, IconWorld } from '@tabler/icons-react';
import { Separator } from '@utrecht/component-library-react/dist/css-module';
import '@gemeentenijmegen/web-components/dist/nijmegen-mobile-menu.js';

export const MobileMenuStoryWebComponent = () => {
  return (
    <nijmegen-mobile-menu>
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
          <div className="nijmegen-mobile-menu__details">
            <button
              aria-expanded="false"
              className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--chevron nijmegen-mobile-menu__link--strong"
            >
              <span>Onderwerpen</span>
            </button>
            <ul className="nijmegen-mobile-menu__list">
              <li>
                <button className="nijmegen-mobile-menu__link" aria-expanded="false" aria-haspopup="menu" data-panel>
                  <span>Identiteit</span>
                </button>
                <div className="nijmegen-mobile-menu__panel">
                  <button className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--back" data-panel>
                    <span>Identiteit</span>
                  </button>
                  <ul className="nijmegen-mobile-menu__list">
                    <li>
                      <a
                        href="/"
                        target="_self"
                        className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow"
                      >
                        Paspoort en identiteitskaart
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        target="_self"
                        className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow"
                      >
                        Uittreksels, verklaringen & bewijzen
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        target="_self"
                        className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow"
                      >
                        Geboorte en overlijden
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        target="_self"
                        className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow"
                      >
                        Trouwen en scheiden
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button className="nijmegen-mobile-menu__link" aria-expanded="false" aria-haspopup="menu" data-panel>
                  <span>Wonen</span>
                </button>
                <div className="nijmegen-mobile-menu__panel">
                  <button className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--back" data-panel>
                    <span>Wonen</span>
                  </button>
                  <ul className="nijmegen-mobile-menu__list">
                    <li>
                      <a
                        href="/"
                        target="_self"
                        className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow"
                      >
                        Verhuizen en migratie
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        target="_self"
                        className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow"
                      >
                        Belastingen
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        target="_self"
                        className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow"
                      >
                        Erfpacht
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        target="_self"
                        className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow"
                      >
                        Verbouwen en wonen
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <a href="/" className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--strong">
            Nieuws
          </a>
        </li>

        <li>
          <a href="/" className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--strong">
            Contact
          </a>
        </li>
      </ul>

      <div className="nijmegen-mobile-menu__separator">
        <Separator />
      </div>

      <ul className="nijmegen-mobile-menu__list">
        <li>
          <div className="nijmegen-mobile-menu__details">
            <button
              aria-expanded="false"
              className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--chevron nijmegen-mobile-menu__link--strong nijmegen-mobile-menu__link--small"
            >
              <span>
                <IconWorld /> Nederlands
              </span>{' '}
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
    </nijmegen-mobile-menu>
  );
};

export const MobileMenuStoryHtml = () => {
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
          <div className="nijmegen-mobile-menu__details">
            <button
              aria-expanded="false"
              className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--chevron nijmegen-mobile-menu__link--strong"
            >
              <span>Onderwerpen</span>
            </button>
            <ul className="nijmegen-mobile-menu__list">
              <li>
                <button className="nijmegen-mobile-menu__link" aria-expanded="false" aria-haspopup="menu" data-panel>
                  <span>Identiteit</span>
                </button>
                <div className="nijmegen-mobile-menu__panel">
                  <button className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--back" data-panel>
                    <span>Identiteit</span>
                  </button>
                  <ul className="nijmegen-mobile-menu__list">
                    <li>
                      <a
                        href="/"
                        target="_self"
                        className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow"
                      >
                        Paspoort en identiteitskaart
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        target="_self"
                        className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow"
                      >
                        Uittreksels, verklaringen & bewijzen
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        target="_self"
                        className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow"
                      >
                        Geboorte en overlijden
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        target="_self"
                        className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow"
                      >
                        Trouwen en scheiden
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button className="nijmegen-mobile-menu__link" aria-expanded="false" aria-haspopup="menu" data-panel>
                  <span>Wonen</span>
                </button>
                <div className="nijmegen-mobile-menu__panel">
                  <button className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--back" data-panel>
                    <span>Wonen</span>
                  </button>
                  <ul className="nijmegen-mobile-menu__list">
                    <li>
                      <a
                        href="/"
                        target="_self"
                        className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow"
                      >
                        Verhuizen en migratie
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        target="_self"
                        className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow"
                      >
                        Belastingen
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        target="_self"
                        className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow"
                      >
                        Erfpacht
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        target="_self"
                        className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow"
                      >
                        Verbouwen en wonen
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <a href="/" className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--strong">
            Nieuws
          </a>
        </li>

        <li>
          <a href="/" className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--strong">
            Contact
          </a>
        </li>
      </ul>

      <div className="nijmegen-mobile-menu__separator">
        <Separator />
      </div>

      <ul className="nijmegen-mobile-menu__list">
        <li>
          <div className="nijmegen-mobile-menu__details">
            <button
              aria-expanded="false"
              className="nijmegen-mobile-menu__link nijmegen-mobile-menu__link--chevron nijmegen-mobile-menu__link--strong nijmegen-mobile-menu__link--small"
            >
              <span>
                <IconWorld /> Nederlands
              </span>{' '}
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
