import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import OX2Container from '../../containers/doc/OX2Container';

const OX2 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <DocsHeader docDesc="OXYGEN RESUSCITATOR CYLINDER" />
      <OX2Container />
    </AppWrapper>
  );
};

export default OX2;
