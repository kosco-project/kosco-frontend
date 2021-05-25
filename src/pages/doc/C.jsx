import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import CConatiner from '../../containers/doc/CContainer';

const C = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <DocsHeader docDesc="CO2 LOW PRESSURE SYSTEM" />
      <CConatiner />
    </AppWrapper>
  );
};

export default C;
