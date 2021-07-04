import React from 'react';
import { useLocation } from 'react-router-dom';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import H1Form from '../../components/doc/H1H3H3-1/H1Form';

const H1H3H31 = () => {
  const location = useLocation();
  const docType = location.pathname.split('/')[2];
  
  const docDesc = docType === 'H1' ? 'BREATHING AIR APPARATUS' : docType === 'H3' ? 'Emergency Escape Breathing Device' : 'ESCAPESET';

  return (
    <AppWrapper>
      <DocsHeader docDesc={docDesc} />
      <H1Form />
    </AppWrapper>
  );
};

export default H1H3H31;
