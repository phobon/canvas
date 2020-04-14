import React from 'react';
import styled, { css } from "styled-components";
import 'styled-components/macro';
import { space } from 'styled-system';
import { Box, Text, Truncate, Flex, Stack } from '@phobon/base';
import { Avatar, Tag } from '@phobon/grimoire';

import LastSaved from '../LastSaved';

const consultationVariants = ({ variant }) => {
  const variants = {
    'normal': {

    },
    'toggled': {
      '&::before': {
        opacity: 0.2,
      },
      '&::after': {
        opacity: 1,
      },
      pointerEvents: 'none',
    },
  };

  return variants[variant];
}

const ConsultationBox = styled(Box)`
  border: 0;
  background: 0;
  width: 100%;
  border-radius: ${props => props.theme.radii[4]}px;
  display: flex;
  flex: none;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  transition: all 90ms ease-out;
  ${space}
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    background-color: ${props => props.theme.colors.accent[7]};
    pointer-events: none;
    border-radius: inherit;
    transition: opacity 90ms ease-out;
    z-index: -1;
  }

  &:hover {
    &::before {
      opacity: 0.1;
    }
  }

  ${consultationVariants}
`;

const ConsultationCard = ({ consultation, variant, ...props }) => {
  const { lastSaved, scheduled, completed, category, patient, content } = consultation;
  const fullName = `${patient.firstName} ${patient.lastName}`;
  return (
    <ConsultationBox variant={variant} {...props}>
      <Stack fullWidth alignItems="flex-start" space={2}>
        <Box fullWidth justifyContent="space-between">
          <Text fontWeight="bold" lineHeight={0}>{fullName}</Text>
          <LastSaved scheduled={scheduled} completed={completed} lastSaved={lastSaved} />
        </Box>
        
        <Stack fullWidth flexDirection="row" space={1} alignItems="flex-start">
          <Flex>
            <Stack fullWidth space={3} alignItems="flex-start">
              <Truncate
                fullWidth
                fontSize={0}
                color="grayscale.3"
                textStyle={content ? 'normal' : 'italic'}
                lines={2}>
                {content ? content : 'Observations pending'}
              </Truncate>

              <Tag bg={`${category.colour}.8`} color={`${category.colour}.1`}>
                {category.name}
              </Tag>
            </Stack>
          </Flex>
          <Avatar name={fullName} size="s" variant="glyph" />
        </Stack>
      </Stack>
    </ConsultationBox>
  );
};

ConsultationCard.displayName = 'ConsultationCard';

ConsultationCard.defaultProps = {
  px: 3,
  py: 3,
};

export default ConsultationCard;