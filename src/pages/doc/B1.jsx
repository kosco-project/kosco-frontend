import React from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import Header from '../../components/common/Header';
import B1Container from '../../containers/doc/B1Container';

const B1 = () => {
  return (
    <AppWrapper>
      <Header docDesc="CYLINDER SPECIFICATION" />
      <B1Container />
    </AppWrapper>
  );
};

export default B1;
