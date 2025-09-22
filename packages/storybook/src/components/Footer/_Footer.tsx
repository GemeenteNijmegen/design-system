import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconClock,
  IconPhone,
  IconSend,
} from '@tabler/icons-react';
import { Heading, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import '@gemeentenijmegen/components-css';

export const argTypes = {};

export const FooterStory = () => {
  return (
    <footer className="nijmegen-footer">
      <div className="nijmegen-footer__container">
        <div className="nijmegen-footer__main">
          <div className="nijmegen-footer__col">
            <div className="nijmegen-footer__block">
              <Heading appearance="utrecht-heading-4" level={2}>
                Meer weten
              </Heading>
              <ul className="nijmegen-link-list">
                <li className="nijmegen-link-list__item">
                  <a className="nijmegen-link-list__link" href="#">
                    <span>Over ons</span>
                  </a>
                </li>
                <li className="nijmegen-link-list__item">
                  <a className="nijmegen-link-list__link" href="#">
                    <span>Werken bij</span>
                  </a>
                </li>
                <li className="nijmegen-link-list__item">
                  <a className="nijmegen-link-list__link" href="#">
                    <span>Into Nijmegen</span>
                  </a>
                </li>
                <li className="nijmegen-link-list__item">
                  <a className="nijmegen-link-list__link" href="#">
                    <span>Onderzoek en cijfers</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="nijmegen-footer__col">
            <div className="nijmegen-footer__block">
              <Heading appearance="utrecht-heading-4" level={2}>
                Contact
              </Heading>
              <Paragraph>
                Heeft u een vraag en vindt u het antwoord niet op onze website? Neem dan gerust contact met ons op.
              </Paragraph>
              <ul className="nijmegen-link-list">
                <li className="nijmegen-link-list__item">
                  <a className="nijmegen-link-list__link nijmegen-link-list__link--no-chevron" href="#">
                    <IconPhone></IconPhone>
                    <span>14 024</span>
                  </a>
                </li>
                <li className="nijmegen-link-list__item">
                  <a className="nijmegen-link-list__link nijmegen-link-list__link--no-chevron" href="#">
                    <IconSend></IconSend>
                    <span>Contactformulier</span>
                  </a>
                </li>
                <li className="nijmegen-link-list__item">
                  <a className="nijmegen-link-list__link nijmegen-link-list__link--no-chevron" href="#">
                    <IconClock></IconClock>
                    <span>Contactgegevens en openingstijden</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="nijmegen-footer__col">
            <div className="nijmegen-footer__block">
              <Heading appearance="utrecht-heading-4" level={2}>
                Nieuwsbrief
              </Heading>
              <ul className="nijmegen-link-list">
                <li className="nijmegen-link-list__item">
                  <a className="nijmegen-link-list__link" href="#">
                    <span>Inschrijven</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="nijmegen-footer__block">
              <Heading appearance="utrecht-heading-4" level={2}>
                Volg gemeente Nijmegen
              </Heading>
              <ul className="nijmegen-link-list">
                <li className="nijmegen-link-list__item">
                  <a className="nijmegen-link-list__link nijmegen-link-list__link--no-chevron" href="#">
                    <IconBrandFacebook></IconBrandFacebook>
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="nijmegen-link-list__item">
                  <a className="nijmegen-link-list__link nijmegen-link-list__link--no-chevron" href="#">
                    <IconBrandX></IconBrandX>
                    <span>X</span>
                  </a>
                </li>
                <li className="nijmegen-link-list__item">
                  <a className="nijmegen-link-list__link nijmegen-link-list__link--no-chevron" href="#">
                    <IconBrandInstagram></IconBrandInstagram>
                    <span>Instagram</span>
                  </a>
                </li>
                <li className="nijmegen-link-list__item">
                  <a className="nijmegen-link-list__link nijmegen-link-list__link--no-chevron" href="#">
                    <IconBrandLinkedin></IconBrandLinkedin>
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nijmegen-footer__sub">
          <Paragraph>© Gemeente Nijmegen 2025</Paragraph>
          <ul>
            <li>
              <a href="" className="utrecht-link utrecht-link--html-a">
                Toegankelijkheid
              </a>
            </li>
            <li>
              <a href="" className="utrecht-link utrecht-link--html-a">
                Privacy
              </a>
            </li>
            <li>
              <a href="" className="utrecht-link utrecht-link--html-a">
                Cookies
              </a>
            </li>
            <li>
              <a href="" className="utrecht-link utrecht-link--html-a">
                Proclaimer
              </a>
            </li>
            <li>
              <a href="" className="utrecht-link utrecht-link--html-a">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
