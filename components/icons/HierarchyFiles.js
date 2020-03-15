import React from 'react';

const HierarchyFiles = ({
  size,
  color,
  ...props
}) => (
  <svg
    {...props}
    viewBox="0 0 22 25"
    width={size}
    height={size}
    fill={color}>
    <path d="M20.531 18.029L21.0632 17.5005L21.0616 17.4989L20.531 18.029ZM19.471 16.968L18.9388 17.4964L18.9404 17.4981L19.471 16.968ZM20.75 9.99999L21.5 10.0018V9.99999H20.75ZM20.531 4.52899L21.0632 4.00054L21.0616 3.99891L20.531 4.52899ZM19.471 3.46799L18.9388 3.99643L18.9404 3.99807L19.471 3.46799ZM14.75 9.99999L14 9.99999L14 10.0018L14.75 9.99999ZM2 1.74799C2 1.33377 1.66421 0.997986 1.25 0.997986C0.835786 0.997986 0.5 1.33377 0.5 1.74799H2ZM0.5 3.24799C0.5 3.6622 0.835786 3.99799 1.25 3.99799C1.66421 3.99799 2 3.6622 2 3.24799H0.5ZM2 6.24799C2 5.83377 1.66421 5.49799 1.25 5.49799C0.835786 5.49799 0.5 5.83377 0.5 6.24799H2ZM0.5 9.24799C0.5 9.6622 0.835786 9.99799 1.25 9.99799C1.66421 9.99799 2 9.6622 2 9.24799H0.5ZM2 12.248C2 11.8338 1.66421 11.498 1.25 11.498C0.835786 11.498 0.5 11.8338 0.5 12.248H2ZM0.5 15.248C0.5 15.6622 0.835786 15.998 1.25 15.998C1.66421 15.998 2 15.6622 2 15.248H0.5ZM2 18.248C2 17.8338 1.66421 17.498 1.25 17.498C0.835786 17.498 0.5 17.8338 0.5 18.248H2ZM4.25 21.998C4.66421 21.998 5 21.6622 5 21.248C5 20.8338 4.66421 20.498 4.25 20.498V21.998ZM7.25 20.498C6.83579 20.498 6.5 20.8338 6.5 21.248C6.5 21.6622 6.83579 21.998 7.25 21.998V20.498ZM10.25 21.998C10.6642 21.998 11 21.6622 11 21.248C11 20.8338 10.6642 20.498 10.25 20.498V21.998ZM13.25 20.498C12.8358 20.498 12.5 20.8338 12.5 21.248C12.5 21.6622 12.8358 21.998 13.25 21.998V20.498ZM14.75 21.998C15.1642 21.998 15.5 21.6622 15.5 21.248C15.5 20.8338 15.1642 20.498 14.75 20.498V21.998ZM1.25 6.99799C0.835786 6.99799 0.5 7.33377 0.5 7.74799C0.5 8.1622 0.835786 8.49799 1.25 8.49799V6.99799ZM4.25 8.49799C4.66421 8.49799 5 8.1622 5 7.74799C5 7.33377 4.66421 6.99799 4.25 6.99799V8.49799ZM7.25 6.99799C6.83579 6.99799 6.5 7.33377 6.5 7.74799C6.5 8.1622 6.83579 8.49799 7.25 8.49799V6.99799ZM10.25 8.49799C10.6642 8.49799 11 8.1622 11 7.74799C11 7.33377 10.6642 6.99799 10.25 6.99799V8.49799ZM13.25 6.99799C12.8358 6.99799 12.5 7.33377 12.5 7.74799C12.5 8.1622 12.8358 8.49799 13.25 8.49799V6.99799ZM14.75 8.49799C15.1642 8.49799 15.5 8.1622 15.5 7.74799C15.5 7.33377 15.1642 6.99799 14.75 6.99799V8.49799ZM15.5 24.998H20V23.498H15.5V24.998ZM20 24.998C20.8282 24.998 21.5 24.3262 21.5 23.498H20V24.998ZM21.5 23.498V18.559H20V23.498H21.5ZM21.5 18.559C21.5 18.1604 21.3416 17.7809 21.0632 17.5005L19.9988 18.5574C19.9997 18.5584 20 18.5589 20 18.5591C20 18.5591 20 18.559 20 18.559H21.5ZM21.0616 17.4989L20.0016 16.4379L18.9404 17.4981L20.0004 18.5591L21.0616 17.4989ZM20.0032 16.4395C19.7214 16.1557 19.3384 15.998 18.941 15.998V17.498C18.9416 17.498 18.9406 17.4983 18.9388 17.4964L20.0032 16.4395ZM18.941 15.998H15.5V17.498H18.941V15.998ZM15.5 15.998C14.6718 15.998 14 16.6698 14 17.498H15.5V17.498V15.998ZM14 17.498V23.498H15.5V17.498H14ZM14 23.498C14 24.3262 14.6718 24.998 15.5 24.998V23.498H14ZM15.5 11.498H20V9.99799H15.5V11.498ZM20 11.498C20.8263 11.498 21.498 10.8285 21.5 10.0018L20 9.99817L20 9.99799V11.498ZM21.5 9.99999V5.05899H20V9.99999H21.5ZM21.5 5.05899C21.5 4.66038 21.3416 4.28089 21.0632 4.00055L19.9988 5.05743C19.9997 5.05836 20 5.05895 20 5.05906C20 5.05912 20 5.05898 20 5.05899H21.5ZM21.0616 3.99891L20.0016 2.93791L18.9404 3.99807L20.0004 5.05907L21.0616 3.99891ZM20.0032 2.93955C19.7214 2.65569 19.3384 2.49799 18.941 2.49799V3.99799C18.9416 3.99799 18.9406 3.99828 18.9388 3.99643L20.0032 2.93955ZM18.941 2.49799H15.5V3.99799H18.941V2.49799ZM15.5 2.49799C14.6718 2.49799 14 3.16977 14 3.99799H15.5V3.99799V2.49799ZM14 3.99799V9.99999H15.5V3.99799H14ZM14 10.0018C14.002 10.8285 14.6737 11.498 15.5 11.498V9.99799L15.5 9.99817L14 10.0018ZM0.5 1.74799V3.24799H2V1.74799H0.5ZM0.5 6.24799V9.24799H2V6.24799H0.5ZM0.5 12.248V15.248H2V12.248H0.5ZM0.5 18.248V19.748H2V18.248H0.5ZM0.5 19.748C0.5 20.9902 1.50779 21.998 2.75 21.998V20.498C2.33621 20.498 2 20.1618 2 19.748H0.5ZM2.75 21.998H4.25V20.498H2.75V21.998ZM7.25 21.998H10.25V20.498H7.25V21.998ZM13.25 21.998H14.75V20.498H13.25V21.998ZM1.25 8.49799H4.25V6.99799H1.25V8.49799ZM7.25 8.49799H10.25V6.99799H7.25V8.49799ZM13.25 8.49799H14.75V6.99799H13.25V8.49799Z" />
  </svg>
);

HierarchyFiles.displayName = 'HierarchyFiles';

HierarchyFiles.defaultProps = {
  size: 24,
  color: 'currentcolor',
};

export default HierarchyFiles