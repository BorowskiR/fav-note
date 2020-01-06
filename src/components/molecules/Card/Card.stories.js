import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Card', module).add('Note', () => <Card cardType="note" />);
storiesOf('Card', module).add('Twitter', () => <Card cardType="twitter" />);
storiesOf('Card', module).add('Article', () => <Card cardType="article" />);
