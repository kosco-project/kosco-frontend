import React from 'react';
import A1Bottom from './A1Bottom';
import A1Top from './A1Top';
import ButtonBox from '../common/ButtonBox';
import Info from '../common/Info';

const A1Form = ({ onProductsDescription, onInspectionDescription, temporaryStorage }) => {

  return (
    <form onSubmit={e => temporaryStorage(e, {form : "A1"})}>
      <Info />
      <A1Top onProductsDescription={onProductsDescription}/>
      <A1Bottom onInspectionDescription={onInspectionDescription}/>
      <ButtonBox />
    </form>
  );
};

export default A1Form;
