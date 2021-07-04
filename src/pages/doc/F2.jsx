import React from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import F2Form from '../../components/doc/F2/F2Form';

const F2 = () => {
  return (
    <AppWrapper>
      <DocsHeader docDesc="PILOT CYLINDER SPECIFICATION" />
      <F2Form />
    </AppWrapper>
  );
};

export default F2;
