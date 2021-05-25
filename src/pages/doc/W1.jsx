import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import W1Container from '../../containers/doc/W1Container';

const W1 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <DocsHeader docDesc="WATER SPRAY SYSTEM" />
      <W1Container />
    </AppWrapper>
  );
};

export default W1;
