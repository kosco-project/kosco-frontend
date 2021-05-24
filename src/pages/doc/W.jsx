import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import Header from '../../components/common/Header';
import WContainer from '../../containers/doc/WContainer';

const W = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <Header docDesc="WATER MIST FIRE FIGHTING SYSTEM" />
      <WContainer />
    </AppWrapper>
  );
};

export default W;
