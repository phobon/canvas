import React from 'react';

import { Stack } from '@phobon/base';

import Add from './Add';
import Brightness from './Brightness';
import Guage from './Gauge';
import MoonBegin from './MoonBegin';
import Sunrise from './Sunrise';
import Users from './Users';
import CollapseSidebar from './CollapseSidebar';
import ExpandSidebar from './ExpandSidebar';
import HierarchyFiles from './HierarchyFiles';

export default {
  title: 'Icons',
};

export const withAllIcons = () => (
  <Stack space={3}>
    <Add />
    <Brightness />
    <Guage />
    <MoonBegin />
    <Sunrise />
    <Users />
    <ExpandSidebar />
    <CollapseSidebar />
    <HierarchyFiles />
  </Stack>
);