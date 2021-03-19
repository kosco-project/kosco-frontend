import React, { useEffect } from 'react';
import AppWrapper from '../components/common/AppWrapper';
import Header from '../components/common/Header';
import InspectionContainer from '../containers/InspectionContainer';

const Inspection = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <Header />
      <InspectionContainer />
    </AppWrapper>
  );
};

export default Inspection;
