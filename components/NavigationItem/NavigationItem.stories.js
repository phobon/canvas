import React from 'react';
import { Stack, Box, Text } from '@phobon/base';

import NavigationItem from './NavigationItem';

export default {
  component: NavigationItem,
  title: 'Components/NavigationItem',
};

export const withDifferentVariants = () => {
  const variants = ['collapsed', 'expanded'];
  const label = 'Link Label';
  return (
    <Stack space={3} width={200} alignItems="flex-start">
      {variants.map(s => (
        <NavigationItem
          key={`NavigationItem__${s}`}
          variant={s}
          tooltip={s === 'collapsed' && label}
          tooltipDirection="right"
          glyph={<Box width={24} height={24} bg="blues.6" borderRadius={4} />}>
          {label}
        </NavigationItem>
      ))}
    </Stack>
  );
};