import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import Header from '../../components/common/Header';
import H4Container from '../../containers/doc/H4Container';

const H4 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <Header docDesc="EBBD(Emergency Escape Breathing Device)" />
      <H4Container />
    </AppWrapper>
  );
};

export default H4;
