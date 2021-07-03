import React from 'react';
import AppWrapper from '../../components/common/AppWrapper';
import DocsHeader from '../../components/common/DocsHeader';
import P1Form from '../../components/doc/P1/P1Form';

const P1 = () => {
  return (
    <AppWrapper>
      <DocsHeader docDesc="PORTABLE FOAM APPLICATOR UNITS" />
      <P1Form />
    </AppWrapper>
  );
};

export default P1;
