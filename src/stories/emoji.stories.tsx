import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Emoji from '../components/emoji';

storiesOf('Emoji', module)
  .add('Default', () => (
    <Emoji label="label" symbol="🐻" />
  ));