import React from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import GForm from '../../components/doc/G/GForm';

const G = () => {
  return (
    <AppWrapper>
      <DocsHeader docDesc="FIRE EXTINGUISHERS" />
      <GForm />
    </AppWrapper>
  );
};

export default G;
