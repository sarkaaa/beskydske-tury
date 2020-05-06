import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/button';

storiesOf('Button', module)
  .add('Default', () => (
      <Button onClick={() => {}}>Hello World</Button>
  ))
  .add('Bordered', () => (
    <Button onClick={() => {}} bordered>Hello World</Button>
  ));