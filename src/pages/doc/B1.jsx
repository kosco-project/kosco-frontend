import React from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import B1Container from '../../containers/doc/B1Container';

const B1 = () => {
  return (
    <AppWrapper>
      <DocsHeader docDesc="CYLINDER SPECIFICATION" />
      <B1Container />
    </AppWrapper>
  );
};

export default B1;
