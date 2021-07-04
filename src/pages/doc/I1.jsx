import React from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import I1Form from '../../components/doc/I-1/I1Form';

const I1 = () => {
  return (
    <AppWrapper>
      <DocsHeader docDesc="GAS TIGHT SUIT" />
      <I1Form />
    </AppWrapper>
  );
};

export default I1;
