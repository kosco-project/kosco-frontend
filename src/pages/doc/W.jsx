import React from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import WForm from '../../components/doc/W/WForm';

const W = () => {
  return (
    <AppWrapper>
      <DocsHeader docDesc="WATER MIST FIRE FIGHTING SYSTEM" />
      <WForm />
    </AppWrapper>
  );
};

export default W;
