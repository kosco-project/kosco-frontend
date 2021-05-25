import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import P1Container from '../../containers/doc/P1Container';

const P1 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <DocsHeader docDesc="PORTABLE FOAM APPLICATOR UNITS" />
      <P1Container />
    </AppWrapper>
  );
};

export default P1;
