import React, { useContext } from 'react';
import 'styled-components/macro';
import { Box, Flex, Stack, Text } from '@phobon/base';
import { Toggle, SquareButton, Spacer } from '@phobon/grimoire';
import Link from 'next/link';

import Gauge from '../icons/Gauge';
import HierarchyFiles from '../icons/HierarchyFiles';
import Users from '../icons/Users';
import CollapseSidebar from '../icons/CollapseSidebar';
import ExpandSidebar from '../icons/ExpandSidebar';

import Identity from '../Identity';
import NavigationItem from '../NavigationItem';
import UserArea from '../UserArea';

import { AppContext, UserContext, DataContext } from '../../contexts';
import appStore from '../../reducers/app';

const items = [
  {
    label: 'Today',
    to: '/today',
    matches: '/today',
    glyph: <Gauge width={18} />
  },
  {
    label: 'Patients',
    to: '/patient',
    matches: '/patient',
    glyph: <Users width={18} />
  },
  {
    label: 'Templates',
    to: '/template',
    matches: '/template',
    glyph: <HierarchyFiles width={18} />
  },
];

const Navigation = ({ match, ...props }) => {
  const [{ currentTheme, sidebarExpanded }, dispatch] = useContext(AppContext);
  const { user } = useContext(UserContext);
  const { tags } = useContext(DataContext);

  const navigationItemVariant = sidebarExpanded ? 'expanded' : 'collapsed';

  return (
    <Stack
      {...props}
      flexDirection="column"
      py={5}
      px={4}
      width={sidebarExpanded ? 220 : null}
      space={5}>
      <Link to={'/'}>
        <Identity css={{ alignSelf: 'flex-start' }} width={24} height={24} ml={1} />
      </Link>

      <Stack as="nav" fullWidth justifyContent="flex-start" space={1}>
        {items.map(({ glyph, label, to, matches, ...m }) => (
          <Link href={to} passHref css={{ width: '100%' }} key={to}>
            <NavigationItem
              as="a"
              {...m}
              variant={navigationItemVariant}
              tooltip={!sidebarExpanded && label}
              tooltipDirection="right"
              glyph={glyph}>
              {label}
            </NavigationItem>
          </Link>
        ))}

        <Spacer bg="grayscale.9" width={1/2} my={4} />

        {tags.map(({ name, colour }) => (
          <Link href={''} passHref key={name}>
            <NavigationItem
              as="a"
              variant={navigationItemVariant}
              tooltip={!sidebarExpanded && name}
              tooltipDirection="right"
              glyph={(
                <Box width={18} height={18}>
                  <Box width={8} height={8} round bg={`${colour}.7`} />
                </Box>
              )}>
              {name}
            </NavigationItem>
          </Link>
        ))}
      </Stack>

      <Flex />

      <NavigationItem
        tooltipDirection="right"
        variant={navigationItemVariant}
        tooltip={sidebarExpanded ? null : 'Expand'}
        onClick={() => dispatch({ type: appStore.actions.TOGGLE_SIDEBAR_EXPANDED, payload: sidebarExpanded ? false : true })}
        glyph={sidebarExpanded ? <CollapseSidebar width={18} /> : <ExpandSidebar width={18} />}>
        {sidebarExpanded ? 'Collapse' : 'Expand'}
      </NavigationItem>
    </Stack>
  );
};

export default Navigation;