import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Emoji from '../components/emoji';

storiesOf('Emoji', module)
  .add('Default (small)', () => (
    <Emoji label="label" symbol="🐻" />
  ))
  .add('Large', () => (
    <Emoji label="label" symbol="🐻" emojiSize="large" />
  ));