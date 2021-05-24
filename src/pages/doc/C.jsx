import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import Header from '../../components/common/Header';
import CConatiner from '../../containers/doc/CContainer';

const C = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <Header docDesc="CO2 LOW PRESSURE SYSTEM" />
      <CConatiner />
    </AppWrapper>
  );
};

export default C;
