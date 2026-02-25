import '@gemeentenijmegen/components-css';

export const argTypes = {
  title: {
    name: 'Title',
    control: 'text',
    table: {
      defaultValue: '',
    },
  },
};

export const TopTaskCardStory = ({ title = '' }) => {
  return (
    <a href="#" className="nijmegen-toptask-card">
      <span className="nijmegen-toptask-card__title">
        <span className="nijmegen-toptask-card__icon">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 48 48">
            <path d="M36,8h-4c0-1.1-.9-2-2-2h-15.1c-1.1,0-1.9.9-1.9,2h-1c-.6,0-1,.5-1,1v4c0,.6.4,1,1,1h1v22.1c-3.1,3.3,1.6,8.1,5,4.9h9.4c1.5,0,2.8-1.2,3-2.7l2.5-24.3h3.2c.5,0,1-.4,1-1v-4c0-.6-.5-1-1-1ZM15.5,40c-2,0-2-3,0-3,2,0,2,3,0,3ZM28.3,38.1c0,.5-.5.9-1,.9h-8.4c.4-2.2-1.7-4.4-4-4V14h15.8l-2.5,24.1ZM35,12H13v-2h1c.6,0,1-.4,1-1v-1h15v1c0,.6.5,1,1,1h4v2Z" />
          </svg>
        </span>
        {title}
      </span>
    </a>
  );
};
