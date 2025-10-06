export const accordionData = [
  {
    label: 'Title 1',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.`,
  },
  {
    label: 'Title 2',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.`,
  },
  {
    label: 'Title 3',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.`,
  },
];

interface AccordionItem {
  label: string;
  body: string;
}

interface AccordionSectionProps {
  label?: string;
  body?: string;
  sections?: AccordionItem[];
  icon?: any;
}

export const argTypes = {
  label: {
    name: 'label',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  body: {
    name: 'body',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
  sections: {
    name: 'sections',
    control: 'object',
    description: 'Array of accordion sections with label and body properties',
    table: {
      disable: true,
    },
  },
  icon: {
    name: 'icon',
    table: {
      disable: true,
    },
  },
};

export const AccordionStoryWebComponent = ({ label = '', body = '', sections, icon = {} }: AccordionSectionProps) => {
  const items = sections ? sections : [{ label, body }];

  return (
    <nijmegen-accordion>
      {items.map((item, index) => (
        <div key={index} className="utrecht-accordion__section">
          <h1 className="utrecht-accordion__header">
            <button
              className="utrecht-button utrecht-button--subtle utrecht-accordion__button"
              type="button"
              aria-expanded="false"
              aria-controls={`utrecht-accordion:r${index + 1}:-panel`}
              id={`utrecht-accordion:r${index + 1}:-button`}
            >
              <span className="utrecht-accordion__button-icon">{icon}</span>
              <span className="utrecht-accordion__button-label">{item.label}</span>
            </button>
          </h1>
          <div
            id={`utrecht-accordion:r${index + 1}:-panel`}
            className="utrecht-accordion__panel"
            aria-hidden="true"
            hidden
          >
            {item.body}
          </div>
        </div>
      ))}
    </nijmegen-accordion>
  );
};
