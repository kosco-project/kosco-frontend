import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import H2AContainer from '../../containers/doc/H2AContainer';

const H2A = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <DocsHeader docDesc="LIFE BOAT AIR CYLINDERS" />
      <H2AContainer />
    </AppWrapper>
  );
};

export default H2A;
