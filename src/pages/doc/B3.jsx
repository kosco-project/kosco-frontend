import React, { useEffect } from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import B3Form  from "../../components/doc/B3/B3Form";

const B3 = ({ history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
  }, [history]);

  return (
    <AppWrapper>
      <DocsHeader docDesc="BREATING AIR COMPRESSOR" />
      <B3Form />
    </AppWrapper>
  );
};

export default B3;
