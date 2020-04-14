import React from 'react';
import { Avatar } from '@phobon/grimoire';

const UserArea = ({ user, ...props }) => (
  <>
    {user && <Avatar name={user.name} {...props} />}
  </>
);

UserArea.displayName = 'UserArea';

export default UserArea;
