import React from 'react';
import { Avatar } from '@phobon/grimoire';

const UserArea = ({ user, sidebarExpanded, ...props }) => 
  user && (
    // <NavLink to="/settings">
      <Avatar name={user.name} size="s" />
    // </NavLink>
  );

UserArea.displayName = 'UserArea';

export default UserArea;
