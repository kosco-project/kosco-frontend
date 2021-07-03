import React from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import IForm from '../../components/doc/I/IForm';

const I = () => {
  return (
    <AppWrapper>
      <DocsHeader docDesc="IMMERSION SUIT" />
      <IForm />
    </AppWrapper>
  );
};

export default I;
