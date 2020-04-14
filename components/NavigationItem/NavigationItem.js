import styled from 'styled-components';
import { withTooltip } from '@phobon/grimoire';
import { Stack } from '@phobon/base';
import { compose, space, layout, border, flexbox, typography, position } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';
import PropTypes from 'prop-types';

const variantProps = ({ variant }) => {
  const variants = {
    'collapsed': {
      width: 32,
    },
    'expanded': {
      width: '100%',
      justifyContent: 'flex-start',
    },
  };

  return variants[variant];
};

const buttonStyles = compose(space, layout, border, flexbox, typography, position);

const NavigationItemContainer = styled('button').withConfig({
  shouldForwardProp,
})`
  ${buttonStyles}

  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  text-decoration: none;
  position: relative;
  transition: color 90ms ease-out;

  border: none;
  border-radius: ${props => props.theme.radii[4]}px;

  color: ${props => props.theme.colors.grayscale[5]};
  background-color: transparent;

  height: 32px;
  padding: 0 ${props => props.theme.space[2]}px;

  svg {
    fill: ${props => props.theme.colors.grayscale[5]};
    transition: fill 90ms ease-out;
  }

  span {
    color: inherit;
    font-size: inherit;
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
    z-index: -1;
  }

  &:hover {
    text-decoration: none;
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

  ${variantProps}

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

const NavigationItem = ({ tooltip, glyph, variant, children, ...props }) => (
  <NavigationItemContainer
    {...props}
    variant={variant}>
    <Stack space={2} flexDirection="row" color="inherit">
      {glyph && glyph}
      {variant === 'expanded' && (
        <span>
          {children}
        </span>
      )}
    </Stack>
  </NavigationItemContainer>
);

NavigationItem.propTypes = {
  glyph: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['expanded', 'collapsed']),
};

NavigationItem.defaultProps = {
  fullWidth: true,
  variant: 'collapsed',
  fontSize: 0,
};

export default withTooltip(NavigationItem);