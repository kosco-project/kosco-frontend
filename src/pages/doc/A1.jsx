import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import A1Container from '../../containers/doc/A1Container';

const A1 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <DocsHeader docDesc="FIXED FIRE APPLIANCE" />
      <A1Container/>
    </AppWrapper>
  );
};

export default A1;
