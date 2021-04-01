import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import Header from '../../components/common/Header';
import H2AContainer from '../../containers/doc/H2AContainer';

const H2A = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <Header />
      <H2AContainer />
    </AppWrapper>
  );
};

export default H2A;
