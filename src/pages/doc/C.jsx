import React from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import CForm from "../../components/doc/C/CForm";

const C = () => {
  return (
    <AppWrapper>
      <DocsHeader docDesc="CO2 LOW PRESSURE SYSTEM" />
      <CForm />
    </AppWrapper>
  );
};

export default C;
