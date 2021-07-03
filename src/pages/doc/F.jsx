import React from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import FForm from '../../components/doc/F/FForm';

const F = () => {
  return (
    <AppWrapper>
      <DocsHeader docDesc="Fire detection system" />
      <FForm />
    </AppWrapper>
  );
};

export default F;
