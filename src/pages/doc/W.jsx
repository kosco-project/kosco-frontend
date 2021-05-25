import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import WContainer from '../../containers/doc/WContainer';

const W = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <DocsHeader docDesc="WATER MIST FIRE FIGHTING SYSTEM" />
      <WContainer />
    </AppWrapper>
  );
};

export default W;
