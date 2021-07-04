import React from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import W1Form from '../../components/doc/W1/W1Form';

const W1 = () => {
  return (
    <AppWrapper>
      <DocsHeader docDesc="WATER SPRAY SYSTEM" />
      <W1Form />
    </AppWrapper>
  );
};

export default W1;
