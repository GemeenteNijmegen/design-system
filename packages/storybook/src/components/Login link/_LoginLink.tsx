import '@gemeentenijmegen/components-css';
import '@utrecht/component-library-react/dist/css-module';

const LOGIN_VARIANTS = {
  digid: {
    className: 'nijmegen-login-link--digid',
    label: 'Inloggen',
    srLabel: ' met DigiD',
    svg: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M43.584 48H4.416A4.425 4.425 0 0 1 0 43.584V4.416A4.425 4.425 0 0 1 4.416 0h39.168A4.425 4.425 0 0 1 48 4.416v39.168A4.425 4.425 0 0 1 43.584 48"
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="black"
        />
        <path
          d="M4.489 35.819v-11.36h3.226c3.797 0 5.885 1.92 5.885 5.344 0 4.096-2.278 6.016-5.98 6.016zm2.056-1.728h1.17c2.247 0 3.733-1.216 3.733-4.192 0-2.464-1.454-3.744-3.89-3.744H6.543zm9.807-10.4c.729 0 1.14.48 1.14 1.12 0 .608-.412 1.12-1.139 1.12-.729 0-1.14-.448-1.14-1.12.033-.576.412-1.12 1.14-1.12zm.981 12.128h-1.93v-8.512l1.93-.096zm4.683-1.664h2.025c1.802 0 2.594.736 2.594 2.112 0 1.632-1.328 2.944-4.398 2.944-2.404 0-3.512-.864-3.512-2.208 0-.8.443-1.472 1.297-1.856v-.064c-.38-.192-.664-.64-.664-1.152 0-.544.317-1.024.95-1.28v-.064c-.76-.448-1.203-1.152-1.203-2.272 0-2.08 1.392-3.2 3.511-3.2.475 0 .886.064 1.298.16h2.72v1.312h-1.296v.064c.348.288.664.864.664 1.6 0 1.888-1.265 2.88-3.575 2.88-.38 0-.728-.064-1.075-.128-.222.128-.348.32-.348.544-.064.384.22.608 1.012.608m.348 3.584c1.834 0 2.499-.48 2.499-1.152 0-.512-.316-.768-1.138-.8l-2.816-.096c-.317.224-.475.512-.475.896.032.704.632 1.152 1.93 1.152m1.802-7.616c0-1.024-.568-1.6-1.644-1.6-.95 0-1.645.544-1.645 1.696 0 1.12.601 1.568 1.614 1.568 1.044.032 1.675-.448 1.675-1.664"
          fill="white"
        />
        <path
          d="M28.85 23.69c.728 0 1.138.48 1.138 1.12 0 .609-.41 1.12-1.138 1.12s-1.14-.447-1.14-1.12c.033-.575.412-1.12 1.14-1.12m.981 12.129h-1.93v-8.512l1.93-.096zm2.436 0v-11.36h3.226c3.798 0 5.885 1.92 5.885 5.344 0 4.096-2.277 6.016-5.98 6.016zm2.056-1.728h1.17c2.247 0 3.734-1.216 3.734-4.192 0-2.464-1.455-3.744-3.891-3.744h-1.013z"
          fill="#E1700D"
        />
      </svg>
    ),
  },
  eherkenning: {
    className: 'nijmegen-login-link--eherkenning',
    label: 'Inloggen als bedrijf of instelling',
    srLabel: ' met e-herkenning',
    svg: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.89 26.18h-4.726V38h4.726z" fill="#DF0067" />
        <path d="M30.89 10h-4.726v11.557h4.726z" fill="#DF0067" />
        <path d="M43.273 10v11.557H33.221l-1.998 4.556h12.05v11.821H48V10z" fill="#DF0067" />
        <path
          d="M7.723 37.934A7.71 7.71 0 0 1 0 30.208V17.726C0 13.5 3.462 10 7.723 10h14.113v4.82H7.723c-1.598 0-2.93 1.322-2.93 2.906v12.482c0 1.585 1.332 2.905 2.93 2.905h14.113v4.821z"
          fill="#133370"
        />
        <path d="M8 22v4h10.923L21 22z" fill="#133370" />
      </svg>
    ),
  },
  eidas: {
    className: 'nijmegen-login-link--eidas',
    label: 'European login',
    srLabel: ' met e-idas',
    svg: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M43.198 47.998H4.8a4.8 4.8 0 0 1-4.8-4.8V4.8A4.8 4.8 0 0 1 4.8 0h38.398a4.8 4.8 0 0 1 4.8 4.8v38.398a4.8 4.8 0 0 1-4.8 4.8"
          fill="#314199"
        />
        <path
          d="m23.982 37.654.63 1.869 1.924-.003-1.365 1.034.375 2.006-1.564-1.138-1.57 1.108.38-1.976-1.351-1.04h1.921z"
          fill="#F8EC26"
        />
        <path
          d="m23.982 5.19.63 1.87 1.924-.003-1.365 1.033.375 2.007-1.564-1.139-1.57 1.108.38-1.976-1.351-1.04h1.921z"
          fill="#F8EC26"
        />
        <path
          d="m31.8 7.278.632 1.87 1.924-.003-1.365 1.033.374 2.007-1.565-1.139-1.57 1.108.38-1.976-1.35-1.04h1.921z"
          fill="#F8EC26"
        />
        <path
          d="m15.784 7.278.632 1.87 1.923-.003-1.365 1.033.375 2.007-1.565-1.139-1.57 1.108.381-1.976-1.35-1.04h1.92z"
          fill="#F8EC26"
        />
        <path
          d="m31.8 35.46.632 1.87 1.924-.002-1.365 1.033.374 2.006-1.565-1.138-1.57 1.107.38-1.975-1.35-1.04h1.921z"
          fill="#F8EC26"
        />
        <path
          d="m15.784 35.46.632 1.87 1.923-.002-1.365 1.033.375 2.006-1.565-1.138-1.57 1.107.381-1.975-1.35-1.04h1.92z"
          fill="#F8EC26"
        />
        <path
          d="m9.795 13.405.632 1.869 1.923-.002-1.364 1.033.374 2.006-1.565-1.139-1.57 1.108.38-1.975-1.35-1.04h1.921z"
          fill="#F8EC26"
        />
        <path
          d="m37.985 13.405.632 1.869 1.924-.002-1.365 1.033.374 2.006-1.565-1.139-1.57 1.108.38-1.975-1.35-1.04h1.921z"
          fill="#F8EC26"
        />
        <path
          d="m9.795 29.608.632 1.869 1.923-.002-1.364 1.033.374 2.006-1.565-1.139-1.57 1.108.38-1.975-1.35-1.04h1.921z"
          fill="#F8EC26"
        />
        <path
          d="m37.985 29.608.632 1.869 1.924-.002-1.365 1.033.374 2.006-1.565-1.139-1.57 1.108.38-1.975-1.35-1.04h1.921z"
          fill="#F8EC26"
        />
        <path
          d="m7.935 21.445.632 1.87 1.922-.003-1.365 1.033.376 2.007-1.565-1.139-1.57 1.108.38-1.976-1.35-1.04h1.92z"
          fill="#F8EC26"
        />
        <path
          d="m40.048 21.445.632 1.87 1.923-.003-1.364 1.033.374 2.007-1.565-1.139-1.57 1.108.38-1.976-1.35-1.04h1.921z"
          fill="#F8EC26"
        />
      </svg>
    ),
  },
} as const;

type LoginVariant = keyof typeof LOGIN_VARIANTS;

interface LoginLinkArgs {
  variant: LoginVariant;
}

export const argTypes = {
  variant: {
    control: { type: 'select' },
    options: ['digid', 'eherkenning', 'eidas'] as LoginVariant[],
    description: 'The login method variant',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'digid' },
    },
  },
};

export const defaultArgs: LoginLinkArgs = {
  variant: 'digid',
};

export const LoginLinkStory = ({ variant = 'digid' }: LoginLinkArgs) => {
  const config = LOGIN_VARIANTS[variant];

  return (
    <button className={`nijmegen-login-link ${config.className}`}>
      <div className="nijmegen-login-link__logo" aria-hidden="true">
        {config.svg}
      </div>
      <span className="nijmegen-login-link__label">
        {config.label}
        <span className="nijmegen-sr-only">{config.srLabel}</span>
      </span>
    </button>
  );
};
