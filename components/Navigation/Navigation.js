import React, { useContext } from 'react';
// import 'styled-components/macro';
import { Box, Flex, Stack, Text } from '@phobon/base';
import { Toggle, SquareButton, Spacer } from '@phobon/grimoire';
// import { NavLink } from 'react-router-dom';

import Gauge from '../icons/Gauge';
import HierarchyFiles from '../icons/HierarchyFiles';
import Users from '../icons/Users';
import CollapseSidebar from '../icons/CollapseSidebar';
import ExpandSidebar from '../icons/ExpandSidebar';

import Identity from '../Identity';
import ContextLink from '../ContextLink';
import UserArea from '../UserArea';

import { AppContext } from '../../contexts';
import appStore from '../../reducers/app';

const categories = [
  {
    category: '',
    items: [
      {
        label: 'Today',
        to: '/today',
        matches: '/today',
        glyph: <Gauge size={18} />
      },
      {
        label: 'Patients',
        to: '/patient',
        matches: '/patient',
        glyph: <Users size={18} />
      }
    ]
  },
  {
    category: 'Admin',
    items: [
      {
        label: 'Templates',
        to: '/template',
        matches: '/template',
        glyph: <HierarchyFiles size={18} />
      },
    ]
  },
];

const Navigation = ({ match, ...props }) => {
  // const [{ currentTheme, sidebarExpanded }, dispatch] = useContext(AppContext);

  const sidebarExpanded = true;
  const currentTheme = 'light';

  const user = {
    name: 'test name',
  };

  const menu = categories.map(({ category, items }) => (
    <Stack fullWidth key={category || 'today'} alignItems="flex-start" space={2}>
      {(category && sidebarExpanded) && (
        <Text
          fontWeight="bold"
          fontSize={0}
          textStyle="caps"
          color="grayscale.4"
          ml={1}>
          {category}
        </Text>
      )}

      {(category && !sidebarExpanded) && (
        <Spacer mb={3} length="100%" />
      )}

      {items.map(({ glyph, label, to, matches, ...m }) => (
        <ContextLink
          fullWidth
          key={label}
          expanded={sidebarExpanded}
          {...m}
          to={to}
          tooltip={!sidebarExpanded && label}
          tooltipDirection="right">
          <Box width={32}>
            {glyph}
          </Box>
          {sidebarExpanded && <Text color="inherit" ml={2}>{label}</Text>}
        </ContextLink>
      ))}
    </Stack>
  ));

  return (
    <Stack
      {...props}
      flexDirection="column"
      alignItems="flex-start"
      py={5}
      px={4}
      width={sidebarExpanded ? 220 : null}
      space={6}>
      <Box fullWidth justifyContent="space-between">
        {/* <NavLink to={'/'}> */}
          <Identity />
        {/* </NavLink> */}

        <UserArea sidebarExpanded={sidebarExpanded} user={user} />
      </Box>

      <Stack as="nav" flexDirection="column" fullWidth justifyContent="flex-start" alignItems="flex-start" space={5}>
        {menu}
      </Stack>

      <Flex />

      <Stack space={3}>
        <SquareButton
          size="s"
          tooltipDirection="right"
          variant="tertiary"
          tooltip={sidebarExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
          onClick={() => dispatch({ type: appStore.actions.TOGGLE_SIDEBAR_EXPANDED, payload: sidebarExpanded ? false : true })}>
          {sidebarExpanded ? <CollapseSidebar /> : <ExpandSidebar />}
          </SquareButton>
        <Toggle
          size="s"
          toggled={currentTheme === 'dark'}
          tooltip={currentTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          tooltipDirection="right"
          onClick={() => dispatch({ type: appStore.actions.CHANGE_THEME, payload: currentTheme === 'light' ? 'dark' : 'light' })} />
      </Stack>
    </Stack>
  );
};

export default Navigation;