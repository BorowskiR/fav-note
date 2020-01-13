import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Molecules/Card', module).add('Note', () => <Card cardType="note" />);
storiesOf('Molecules/Card', module).add('Twitter', () => <Card cardType="twitter" />);
storiesOf('Molecules/Card', module).add('Article', () => <Card cardType="article" />);
