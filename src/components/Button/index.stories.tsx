import React from 'react';
import { Button } from '.';
import { actions, decorate } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

const first = decorate([(args) => args.slice(0, 1)]);
const events = actions({ onMouseOver: 'hovered' }, { limit: 5 });

export default {
  component: Button,
  title: 'Button',
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div
        style={{
          background: '#ff1a',
          textAlign: 'center',
          font: '20px',
          width: '100px',
        }}
      >
        {storyFn()}
      </div>
    ),
    withInfo('Informaçoes')
  ],
  parameters: { notes: 'componentNotes' },
};

export const Default = () => {
  return (
    <Button {...events} onClick={first.action('button-clicked', { limit: 2 })}>
      oi
    </Button>
  );
};
