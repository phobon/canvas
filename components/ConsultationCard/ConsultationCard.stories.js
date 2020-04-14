import React from 'react';
import { Stack } from '@phobon/base';

import ConsultationCard from './ConsultationCard';

export default {
  component: ConsultationCard,
  title: 'Components/ConsultationCard',
};

const complete = {
  id: '515ab83e-2e8e-424e-badd-fe212c984d94',
  scheduled: '2020-01-02',
  lastSaved: '2019-12-28',
  completed: '2019-12-28',
  isComplete: true,
  patient: {
    id: '2d15a3b5-1819-47bc-8b51-ac87ff505023',
    firstName: 'Elisha',
    lastName: 'Hilton'
  },
  tags: [],
  category: {
    name: 'Physiotherapy',
    colour: 'cyans'
  },
  observations: [
    {
      id: '85d3ec71-0565-404a-b9d2-0ca219eda2c0',
      name: null,
      observationType: 'Freeform',
      content: 'Bacon ipsum dolor amet turkey cupim swine jowl, kevin chicken salami pork chop ball tip tongue tri-tip chuck. Filet mignon hamburger fatback chislic pancetta cow rump. Cupim porchetta pork belly tail, boudin landjaeger short loin pork chop spare ribs alcatra pork loin. Cow prosciutto ribeye biltong doner short ribs kielbasa meatloaf strip steak boudin. Pork loin kevin pork cupim alcatra burgdoggen jerky t-bone pig salami turducken porchetta tail strip steak sausage. Buffalo corned beef chislic ball tip. T-bone picanha shankle, fatback pastrami meatball porchetta sausage bresaola pork loin.\n\nPork shank ham hock chislic sausage, hamburger short loin strip steak frankfurter t-bone capicola. Pork chop pork loin turkey ribeye burgdoggen, landjaeger kevin ground round meatball alcatra venison porchetta ham. Salami pork chop venison, meatball cow pork sirloin. Corned beef pastrami sausage tongue swine cow. Cupim swine shank biltong pork chop tail bacon pig ham hock venison tenderloin doner turkey. Chuck swine corned beef salami leberkas prosciutto chislic capicola spare ribs short ribs cow pork loin venison drumstick jowl.'
    }
  ]
};
const incomplete = {
  id: '515ab83e-2e8e-424e-badd-fe212c984d94',
  scheduled: '2020-01-02',
  lastSaved: '2019-12-28',
  completed: null,
  isComplete: false,
  patient: {
    id: '2d15a3b5-1819-47bc-8b51-ac87ff505023',
    firstName: 'Elisha',
    lastName: 'Hilton'
  },
  tags: [],
  category: {
    name: 'Yoga',
    colour: 'purples'
  },
  observations: [
    {
      id: '85d3ec71-0565-404a-b9d2-0ca219eda2c0',
      name: null,
      observationType: 'Freeform',
      content: null,
    }
  ]
};

export const withDifferentCompletionStates = () => (
  <Stack space={3} width={300}>
    <ConsultationCard consultation={complete} />
    <ConsultationCard consultation={incomplete} />
  </Stack>
);