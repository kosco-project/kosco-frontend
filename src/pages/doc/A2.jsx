import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import A2Container from '../../containers/doc/A2Container';

const A2 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <DocsHeader docDesc="FIXED FIRE APPLIANCE" />
      <A2Container />
    </AppWrapper>
  );
};

export default A2;
