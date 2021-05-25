import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import H2Container from '../../containers/doc/H2Conatiner';

const H2 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <DocsHeader docDesc="BREATHING AIR CYLINDERS" />
      <H2Container />
    </AppWrapper>
  );
};

export default H2;
