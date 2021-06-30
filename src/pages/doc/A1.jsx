import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import A1Form from '../../components/doc/A1/A1Form';

const A1 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <DocsHeader docDesc="FIXED FIRE APPLIANCE" />
      <A1Form />
    </AppWrapper>
  );
};

export default A1;
