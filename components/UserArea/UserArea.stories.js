import React from 'react';

import UserArea from './UserArea';

export default {
  component: UserArea,
  title: 'Components/UserArea',
};

export const withUser = () => {
  const user = {
    name: 'Test User',
  };
  return (
    <UserArea user={user} />
  );
};