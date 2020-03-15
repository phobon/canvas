import React from 'react';

const CollapseSidebar = ({
  size,
  color,
  ...props
}) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke={color}
    strokeWidth={1.5}
    fill="none">
    <path d="M23.25 12.0039H7.5 M11.25 15.7539L7.5 12.0039L11.25 8.25391 M15.75 16.5V21C15.786 21.79 15.176 22.461 14.386 22.5H2.11299C1.32299 22.46 0.713991 21.79 0.749991 21V3C0.713991 2.21 1.32299 1.539 2.11299 1.5H14.386C15.176 1.539 15.786 2.21 15.75 3V7.5" />
  </svg>
);

CollapseSidebar.displayName = 'CollapseSidebar';

CollapseSidebar.defaultProps = {
  size: 20,
  color: 'currentcolor',
};

export default CollapseSidebar