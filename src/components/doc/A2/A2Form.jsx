import React from 'react';
import ButtonBox from '../common/ButtonBox';
import A2Bottom from './A2Bottom';
import Info from '../common/Info';
import A2Top from './A2Top';

const A2Form = ({ onProductsDescription, onInspectionDescription, temporaryStorage }) => {
  return (
    <form onSubmit={e => temporaryStorage(e, {form : "A2"})}>
      <Info />
      <A2Top onProductsDescription={onProductsDescription}/>
      <A2Bottom onInspectionDescription={onInspectionDescription}/>
      <ButtonBox />
    </form>
  );
};

export default A2Form;
