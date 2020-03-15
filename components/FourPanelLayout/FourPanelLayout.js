import React, { useState } from 'react';
import { Grid } from '@phobon/base';

import { LayoutContext } from '../../contexts';

import Navigation from '../Navigation';

const FourPanelLayout = ({ user, children, match }) => {
  const [columns, setColumns] = useState('1fr 1fr auto');

  return (
    <Grid
      id="canvas__layout"
      gridTemplateColumns="auto 1fr"
      gridTemplateRows="1fr"
      gridTemplateAreas="'nav main'"
      fullWidth
      fullHeight
      bg="grayscale.9">
      
      <Navigation gridArea="nav" fullHeight user={user} match={match} />

      <Grid
        as="main"
        gridArea="main"
        fullWidth
        fullHeight
        gridTemplateColumns={columns}
        gridTemplateRows="1fr"
        gridTemplateAreas="'list detail context'">
        <LayoutContext.Provider value={[columns, setColumns]}>
          {children}
        </LayoutContext.Provider>
      </Grid>
    </Grid>
  );
};

FourPanelLayout.displayName = "FourPanelLayout";

export default FourPanelLayout;
