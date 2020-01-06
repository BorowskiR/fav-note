import React from 'react';
import { storiesOf } from '@storybook/react';
// import { withKnobs, select } from '@storybook/addon-knobs';
import Heading from './Heading';

storiesOf('Heading', module)
  .add('Normal', () => <Heading>Siema Rafal</Heading>)
  .add('big', () => <Heading big>Siema Rafal</Heading>);
