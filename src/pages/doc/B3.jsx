import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import Header from '../../components/common/Header';
import B3Container from '../../containers/doc/B3Container';

const B3 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <Header docDesc="BREATING AIR COMPRESSOR" />
      <B3Container />
    </AppWrapper>
  );
};

export default B3;
