import React from 'react';

const Add = ({
  size,
  color,
  ...props
}) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}>
    <path d="M0.75 11.25C0.335786 11.25 0 11.5858 0 12C0 12.4142 0.335786 12.75 0.75 12.75V11.25ZM23.25 12.75C23.6642 12.75 24 12.4142 24 12C24 11.5858 23.6642 11.25 23.25 11.25V12.75ZM12.75 0.75C12.75 0.335786 12.4142 0 12 0C11.5858 0 11.25 0.335786 11.25 0.75H12.75ZM11.25 23.25C11.25 23.6642 11.5858 24 12 24C12.4142 24 12.75 23.6642 12.75 23.25H11.25ZM0.75 12.75H23.25V11.25H0.75V12.75ZM11.25 0.75V23.25H12.75V0.75H11.25Z" />
  </svg>
);

Add.displayName = 'Add';

Add.defaultProps = {
  size: 24,
  color: 'currentcolor',
};

export default Add;