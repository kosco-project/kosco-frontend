import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import A3Container from '../../containers/doc/A3Container';

const A3 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <DocsHeader docDesc="FIXED FOAM FIRE EXTINGUISHING SYSTEM" />
      <A3Container />
    </AppWrapper>
  );
};

export default A3;
