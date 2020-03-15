import React, { useContext, useEffect, useState } from 'react';
import { Box, Heading, } from '@phobon/base';

import { Consultations, ConsultationList } from '../../components';

import { DataContext, LayoutContext } from '../../contexts';

const Dashboard = ({ history, match }) => {
  const [{ practice, consultations }] = useContext(DataContext);
  const [columns, setColumns] = useContext(LayoutContext);
  const [consultation, setConsultation] = useState(null);

  // Change the layout for this particular page.
  useEffect(() => setColumns('minmax(300px, 1fr) 4fr auto'), [columns]);

  // If we hit this page with no /:id
  useEffect(() => {
    if (!consultations) {
      return;
    }

    // If there isn't a selectedConsultation or params, then set the first item as the selected one
    const { params } = match;
    if (!consultation && !params.id) {
      history.push(`/today/${consultations[0].id}`);
      return;
    }
  }, [consultations]);

  // If the match changes
  useEffect(() => {
    // If consultations haven't been loaded yet, back out here.
    if (!consultations || !match.params.id) {
      return;
    }

    // Select the consultation.
    setConsultation(consultations.find(o => o.id === match.params.id));
  }, [consultations, match.url]);

  if (!practice || !consultations || !consultation) {
    return (
      <Box fullWidth fullHeight gridArea="1 / 1 / span 1 / span 2">
        <Heading.H3>Loading data...</Heading.H3>
      </Box>
    );
  }

  const { patient } = consultation;

  return (
    <>
      <ConsultationList
        consultations={consultations}
        setSelectedConsultation={setConsultation}
        selectedConsultation={consultation}
        gridArea="list"
        total={consultations.length}
        bg="background" />
      <Consultations gridArea="detail" patientId={patient.id} />
    </>
  );
};

Dashboard.displayName = 'Dashboard';

export default Dashboard;