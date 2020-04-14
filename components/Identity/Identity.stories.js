import React from 'react';
import { Stack } from '@phobon/base';

import Identity from './Identity';

export default {
  component: Identity,
  title: 'Components/Identity',
};

export const withDefaultProps = () => <Identity />;

export const withDifferentSizes = () => {
  const sizes = [16, 24, 32, 40, 48];
  return (
    <Stack space={3} alignItems="flex-start">
      {sizes.map(s => <Identity width={s} height={s} key={s} />)}
    </Stack>
  );
};

export const withDifferentColours = () => {
  const colours = ['accent.8', 'oranges.8', 'purples.8', 'greens.8'];
  return (
    <Stack space={3} alignItems="flex-start">
      {colours.map(s => <Identity width={24} height={24} key={s} fill={s} />)}
    </Stack>
  );
};