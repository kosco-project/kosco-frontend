import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import Header from '../../components/common/Header';
import H41Container from '../../containers/doc/H41Container';

const H41 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <Header docDesc="ESCAPESET" />
      <H41Container />
    </AppWrapper>
  );
};

export default H41;
