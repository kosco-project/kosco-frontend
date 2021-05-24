import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import Header from '../../components/common/Header';
import A3Container from '../../containers/doc/A3Container';

const A3 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <Header docDesc="FIXED FOAM FIRE EXTINGUISHING SYSTEM" />
      <A3Container />
    </AppWrapper>
  );
};

export default A3;
