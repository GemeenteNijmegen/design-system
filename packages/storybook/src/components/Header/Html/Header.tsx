// import clsx from 'clsx';

// export const argTypes = {
//   children: {
//     control: { type: 'object' },
//     name: 'Content',
//     description: 'Button text',
//   },
//   appearance: {
//     name: 'Variation',
//     description: 'Button variations',
//     control: { type: 'select' },
//     options: ['Default', 'Primary', 'Secondary', 'Subtle'],
//     table: {
//       type: {
//         summary: ['string'],
//       },
//     },
//   },
//   state: {
//     name: 'State',
//     description: 'Button states',
//     control: { type: 'select' },
//     options: ['Default', 'Active', 'Hover', 'Hover + focus-visible', 'Focus', 'Focus-visible'],
//   },
//   disabled: {
//     name: 'Disabled',
//     description: 'Disable the button',
//     control: { type: 'boolean' },
//     table: {
//       type: {
//         summary: ['boolean'],
//       },
//     },
//   },
//   iconBeginning: {
//     name: 'Icon beginning',
//     description: 'Icon at the beginning of the button',
//     control: { type: 'select' },
//     options: ['None', 'Tabler example', 'OpenGemeente example'],
//     table: {
//       type: {
//         summary: ['string'],
//       },
//     },
//   },
//   iconEnding: {
//     name: 'Icon ending',
//     description: 'Icon at the ending of the button',
//     control: { type: 'select' },
//     options: ['None', 'Tabler example', 'OpenGemeente example'],
//     table: {
//       type: {
//         summary: ['string'],
//       },
//     },
//   },
// };

// export const defaultArgs = {
//   children: 'Button text',
//   appearance: 'Default',
//   state: 'Default',
//   disabled: false,
//   iconBeginning: 'None',
//   iconEnding: 'None',
// };

export const HeaderStory = () =>
  //   {
  //   children = '',
  //   appearance = defaultArgs.appearance,
  //   state = defaultArgs.state,
  //   disabled = defaultArgs.disabled,
  //   iconBeginning = defaultArgs.iconBeginning,
  //   iconEnding = defaultArgs.iconEnding,
  //   },
  {
    return (
      <header className="nijmegen-header">
        <div className="nijmegen-container">
          <div className="nijmegen-header__content"></div>
        </div>
      </header>
    );
  };
