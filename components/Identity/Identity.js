import React from "react";
import { Vector } from '@phobon/base';

const Identity = ({ colour1, colour2, colour3, ...props }) => (
  <Vector viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M16 0H0V16H16V0Z" fill="white"/>
    <rect opacity="0.8" width="11" height="11" rx="2" transform="matrix(1 0 0 -1 0 11)" fill={colour1}/>
    <rect opacity="0.8" width="11" height="11" rx="2" transform="matrix(1 0 0 -1 5 16)" fill={colour2}/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 5H7C5.89543 5 5 5.89543 5 7V11H9C10.1046 11 11 10.1046 11 9V5Z" fill={colour3}/>
  </Vector>
);

Identity.defaultProps = {
  width: 32,
  height: 32,
  // colour1: '#496075',
  // colour2: '#C2F1DB',
  colour1: '#FBC0BA',
  colour2: '#A1B8D0',
  colour3: '#89A6C4',
};

export default Identity;