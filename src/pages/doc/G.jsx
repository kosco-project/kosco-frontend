import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import GContainer from '../../containers/doc/GContainer';

const G = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <DocsHeader docDesc="FIRE EXTINGUISHERS" />
      <GContainer />
    </AppWrapper>
  );
};

export default G;
