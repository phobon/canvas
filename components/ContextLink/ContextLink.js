import styled, { css } from 'styled-components';
import { space } from 'styled-system';
// import { NavLink } from 'react-router-dom';
import { withTooltip } from '@phobon/grimoire';
import { focus } from '@phobon/base';

const expanded = props => props.expanded && css`
  width: 100%;
  justify-content: flex-start;
`;

// const ContextLink = styled(NavLink)`
const ContextLink = styled.a`
  ${space}
  text-decoration: none;
  position: relative;
  transition: color 90ms ease-out;
  color: ${props => props.theme.colors.grayscale[5]};
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.radii[4]}px;

  > * {
    z-index: 1;
  }

  svg {
    fill: ${props => props.theme.colors.grayscale[5]};
    transition: fill 90ms ease-out;
  }

  &::before {
    content: '';
    height: 100%;
    width: 100%;
    border-radius: inherit;
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${props => props.theme.colors.accent[8]};
    transition: opacity 90ms ease-out;
    opacity: 0;
  }

  &:hover {
    color: ${props => props.theme.colors.accent[1]};
    svg {
      fill: ${props => props.theme.colors.accent[1]};
    } 

    &::before {
      opacity: 0.5;
    }
  }

  &:visited, &:focus {
    text-decoration: none;
  }

  ${focus}
  ${expanded}

  &.active {
    pointer-events: none;
    color: ${props => props.theme.colors.accent[1]};
    svg {
      fill: ${props => props.theme.colors.accent[1]};
    } 

    &::before {
      opacity: 0.5;
    }
  }
`;

export default withTooltip(ContextLink);