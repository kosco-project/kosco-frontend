import React from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import A3Form from "../../components/doc/A3/A3Form";

const A3 = () => {
  return (
    <AppWrapper>
      <DocsHeader docDesc="FIXED FOAM FIRE EXTINGUISHING SYSTEM" />
      <A3Form />
    </AppWrapper>
  );
};

export default A3;
