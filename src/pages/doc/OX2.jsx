import React from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import OX2Form from '../../components/doc/OX2/OX2Form';

const OX2 = () => {
  return (
    <AppWrapper>
      <DocsHeader docDesc="OXYGEN RESUSCITATOR CYLINDER" />
      <OX2Form />
    </AppWrapper>
  );
};

export default OX2;
