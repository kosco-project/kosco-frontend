import React from 'react';
import { useLocation } from 'react-router-dom';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import H2Form from '../../components/doc/H2H2AH4H4-1/H2Form';

const H2H2AH4H41 = () => {
  const location = useLocation();
  const docType = location.pathname.split('/')[2];

  const docDesc =
    docType === 'H2'
    ? 'BREATHING AIR CYLINDERS'
      : docType === 'H2-A'
        ? 'LIFE BOAT AIR CYLINDERS'
        : docType === 'H4'
          ? 'Emergency Escape Breathing Device'
          : 'ESCAPESET'

  return (
    <AppWrapper>
      <DocsHeader docDesc={docDesc} />
      <H2Form />
    </AppWrapper>
  );
};

export default H2H2AH4H41;
