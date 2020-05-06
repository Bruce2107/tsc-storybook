import React from 'react';
import { addDecorator } from '@storybook/react';

addDecorator(storyFn => <div style={{ fontSize: '20px' }}>{storyFn()}</div>);
