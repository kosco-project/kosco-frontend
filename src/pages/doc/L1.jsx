import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import Header from '../../components/common/Header';
import L1Container from '../../containers/doc/L1Container';

const L1 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <Header docDesc="FOAM APPLICATOR" />
      <L1Container />
    </AppWrapper>
  );
};

export default L1;
