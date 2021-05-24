import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import Header from '../../components/common/Header';
import FContainer from '../../containers/doc/FContainer';

const F = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <Header docDesc="Fire detection system" />
      <FContainer />
    </AppWrapper>
  );
};

export default F;
