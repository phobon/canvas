import React from 'react';

import LastSaved from './LastSaved';

export default {
  component: LastSaved,
  title: 'Components/LastSaved',
};

const scheduled = '2020-10-10';
const completed = '2019-12-28';
const lastSaved = '2019-12-28';

export const withScheduledDate = () => <LastSaved scheduled={scheduled} />;
export const withCompletedDate = () => <LastSaved completed={completed} />;
export const withLastSavedDate = () => <LastSaved lastSaved={lastSaved} />;