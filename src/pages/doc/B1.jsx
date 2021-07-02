import React from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import B1Form from '../../components/doc/B1/B1Form';

const B1 = () => {
  return (
    <AppWrapper>
      <DocsHeader docDesc="CYLINDER SPECIFICATION" />
      <B1Form />
    </AppWrapper>
  );
};

export default B1;
