import React from 'react';

import FourPanelLayout from './FourPanelLayout';

import { AppContext, UserContext, DataContext } from '../../contexts';

export default {
  component: FourPanelLayout,
  title: 'Layouts/FourPanelLayout',
};

export const withDefaultProps = () => {
  const appContextValue = [{
      currentTheme: 'light',
      sidebarExpanded: true,
    },
    () => null,
  ];
  const userContextValue = {
    user: {
      name: 'Test User',
    },
  };
  const dataContextValue = {
    tags: [{
        name: 'Physiotherapy',
        colour: 'cyans'
      },
      {
        name: 'Pilates',
        colour: 'purples'
      },
      {
        name: 'Nutrition',
        colour: 'oranges'
      },
      {
        name: 'Meditation',
        colour: 'greens'
      },
    ],
  }
  return (
    <UserContext.Provider value={userContextValue}>
      <DataContext.Provider value={dataContextValue}>
        <AppContext.Provider value={appContextValue}>
          <FourPanelLayout />
        </AppContext.Provider>
      </DataContext.Provider>
    </UserContext.Provider>
  );
};

export const withSidebarCollapsed = () => {
  const appContextValue = [{
      currentTheme: 'light',
      sidebarExpanded: false,
    },
    () => null,
  ];
  const userContextValue = {
    user: {
      name: 'Test User',
    },
  };
  const dataContextValue = {
    tags: [{
        name: 'Physiotherapy',
        colour: 'cyans'
      },
      {
        name: 'Pilates',
        colour: 'purples'
      },
      {
        name: 'Nutrition',
        colour: 'oranges'
      },
      {
        name: 'Meditation',
        colour: 'greens'
      },
    ],
  }
  return (
    <UserContext.Provider value={userContextValue}>
      <DataContext.Provider value={dataContextValue}>
        <AppContext.Provider value={appContextValue}>
          <FourPanelLayout />
        </AppContext.Provider>
      </DataContext.Provider>
    </UserContext.Provider>
  );
};