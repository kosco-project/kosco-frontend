import React from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import A2Form from "../../components/doc/A2/A2Form";

const A2 = () => {
  return (
    <AppWrapper>
      <DocsHeader docDesc="FIXED FIRE APPLIANCE" />
      <A2Form />
    </AppWrapper>
  );
};

export default A2;
