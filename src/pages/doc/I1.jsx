import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import I1Container from '../../containers/doc/I1Container';

const I1 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <DocsHeader docDesc="GAS TIGHT SUIT" />
      <I1Container />
    </AppWrapper>
  );
};

export default I1;
