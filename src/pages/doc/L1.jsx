import React from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import L1Form from '../../components/doc/L1/L1Form';

const L1 = () => {
  return (
    <AppWrapper>
      <DocsHeader docDesc="FOAM APPLICATOR" />
      <L1Form />
    </AppWrapper>
  );
};

export default L1;
