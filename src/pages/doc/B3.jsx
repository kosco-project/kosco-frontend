import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import B3Container from '../../containers/doc/B3Container';

const B3 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <DocsHeader docDesc="BREATING AIR COMPRESSOR" />
      <B3Container />
    </AppWrapper>
  );
};

export default B3;
