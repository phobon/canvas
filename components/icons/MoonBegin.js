import React from 'react';

const MoonBegin = ({
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
    <path d="M10.906 23.011C10.906 23.4252 11.2418 23.761 11.656 23.761C12.0702 23.761 12.406 23.4252 12.406 23.011H10.906ZM11.656 15.511L12.1863 14.9807C11.8934 14.6878 11.4186 14.6878 11.1257 14.9807L11.656 15.511ZM13.3757 18.2913C13.6686 18.5842 14.1434 18.5842 14.4363 18.2913C14.7292 17.9984 14.7292 17.5236 14.4363 17.2307L13.3757 18.2913ZM8.87568 17.2307C8.58278 17.5236 8.58278 17.9984 8.87568 18.2913C9.16857 18.5842 9.64344 18.5842 9.93634 18.2913L8.87568 17.2307ZM14.656 19.261C14.2418 19.261 13.906 19.5968 13.906 20.011C13.906 20.4252 14.2418 20.761 14.656 20.761V19.261ZM22.906 20.761C23.3202 20.761 23.656 20.4252 23.656 20.011C23.656 19.5968 23.3202 19.261 22.906 19.261V20.761ZM1.15601 19.261C0.741792 19.261 0.406006 19.5968 0.406006 20.011C0.406006 20.4252 0.741792 20.761 1.15601 20.761V19.261ZM8.65601 20.761C9.07022 20.761 9.40601 20.4252 9.40601 20.011C9.40601 19.5968 9.07022 19.261 8.65601 19.261V20.761ZM15.406 8.76101L15.406 9.51107L15.4152 9.51096L15.406 8.76101ZM9.40601 2.76101L8.65601 2.75295V2.76101H9.40601ZM9.74501 0.851013L10.4521 1.10093C10.5476 0.830723 10.4808 0.529717 10.2799 0.325315C10.0791 0.120914 9.77925 0.0488546 9.50743 0.139637L9.74501 0.851013ZM13.535 12.203L13.2975 11.4916L13.2974 11.4916L13.535 12.203ZM17.316 8.42201L18.0274 8.65954C18.1182 8.38772 18.0461 8.08794 17.8417 7.88707C17.6373 7.68621 17.3363 7.61938 17.0661 7.71488L17.316 8.42201ZM12.406 23.011V15.511H10.906V23.011H12.406ZM14.4363 17.2307L12.1863 14.9807L11.1257 16.0413L13.3757 18.2913L14.4363 17.2307ZM11.1257 14.9807L8.87568 17.2307L9.93634 18.2913L12.1863 16.0413L11.1257 14.9807ZM14.656 20.761H22.906V19.261H14.656V20.761ZM1.15601 20.761H8.65601V19.261H1.15601V20.761ZM15.406 8.01101C12.5062 8.01101 10.156 5.6608 10.156 2.76101H8.65601C8.65601 6.48923 11.6778 9.51101 15.406 9.51101V8.01101ZM10.156 2.76908C10.1621 2.20113 10.2624 1.63781 10.4521 1.10093L9.03787 0.601097C8.79361 1.29222 8.66394 2.0189 8.65605 2.75295L10.156 2.76908ZM9.50743 0.139637C5.97973 1.31779 4.07436 5.13153 5.25263 8.65959L6.67538 8.18443C5.75965 5.4425 7.24028 2.47824 9.98258 1.56239L9.50743 0.139637ZM5.25263 8.65959C6.43078 12.1873 10.2445 14.0927 13.7726 12.9144L13.2974 11.4916C10.5555 12.4074 7.59123 10.9267 6.67538 8.18443L5.25263 8.65959ZM13.7725 12.9144C15.7812 12.2437 17.3567 10.6682 18.0274 8.65954L16.6046 8.18448C16.0833 9.74582 14.8588 10.9703 13.2975 11.4916L13.7725 12.9144ZM17.0661 7.71488C16.5299 7.90436 15.9663 8.00407 15.3968 8.01107L15.4152 9.51096C16.1477 9.50195 16.8741 9.37367 17.5659 9.12915L17.0661 7.71488Z" />
  </svg>
);

MoonBegin.displayName = 'MoonBegin';

MoonBegin.defaultProps = {
  size: 24,
  color: 'currentcolor',
};

export default MoonBegin