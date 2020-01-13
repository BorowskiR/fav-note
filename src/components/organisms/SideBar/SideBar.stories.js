import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import SideBar from './SideBar';

storiesOf('Organism/SideBar', module)
  .addDecorator(StoryRouter())
  .add('Normal', () => <SideBar />);
