import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/button';

storiesOf('Button', module)
  .add('Primary', () => (
    <Button onClick={() => {}}>Hello World</Button>
  ))
  .add('Primary small', () => (
    <Button onClick={() => {}} small>Hello World</Button>
  ))
  .add('Secondary', () => (
    <Button onClick={() => {}} secondary>Hello World</Button>
  ))
  .add('Secondary small', () => (
    <Button onClick={() => {}} secondary small>Hello World</Button>
  ));