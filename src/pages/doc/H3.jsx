import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import Header from '../../components/common/Header';
import H3Container from '../../containers/doc/H3Container';

const H3 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <Header docDesc="EBBD(Emergency Escape Breathing Device)" />
      <H3Container />
    </AppWrapper>
  );
};

export default H3;
