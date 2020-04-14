import React from 'react';
import { Stack, Box, Flex, Scrollable, BoxList, BoxListItem, Text, Grid } from '@phobon/base';
import Link from 'next/link';
import 'styled-components/macro';

import ConsultationCard from '../ConsultationCard';

const ConsultationList = ({ consultations, total, remaining, selectedConsultation, ...props }) => (
  <Grid
    fullWidth
    fullHeight
    alignItems="flex-start"
    gridTemplateRows="auto 1fr"
    gridTemplateColumns="1fr"
    gridTemplateAreas="'list__header'
                      'list__list'"
    {...props}>
    <Stack fullWidth gridArea="list__header" px={3} pt={5} pb={3}>
      <Box fullWidth height={32} bg="grayscale.8" borderRadius={3} justifyContent="flex-start" px={3}>
        <Text color="grayscale.5" fontSize={0}>Add an appointment</Text>
      </Box>
    </Stack>
    <Flex flexDirection="column" fullHeight gridArea="list__list">
      <Scrollable fullWidth minimal px={3} pt={3} scrollbarColor="accent.7">
        <BoxList
          fullWidth
          space={2}>
          {consultations.map(c => {
            const variant = selectedConsultation.id === c.id ? 'toggled' : 'normal';
            return (
              <BoxListItem key={c.id} fullWidth>
                <Link href={`/today/${c.id}`}>
                  <ConsultationCard
                    variant={variant}
                    consultation={c} />
                </Link>
              </BoxListItem>
            );
          })}
        </BoxList>
      </Scrollable>
    </Flex>
  </Grid>
);

export default ConsultationList;