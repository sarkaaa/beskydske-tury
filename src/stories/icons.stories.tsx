import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../components/icon';

storiesOf('Icons', module)
  .add('Instagram', () => (
    <Icon to="/" iconName="ig" />
  ))
  .add('Github', () => (
    <Icon to="/" iconName="github" />
  ))
  .add('Email', () => (
    <Icon to="/" iconName="email" />
  ));