import React from 'react';
import styled from 'styled-components';
import A2Bottom from './A2Bottom';
import Info from '../common/Info';
import A2Top from './A2Top';
import TemporaryStorageButton from '../common/TemporaryStorageButton';
import InspectionCompleteButton from '../common/InspectionCompleteButton';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
  }`;

const A2Form = ({ onProductsDescription, onInspectionDescription, temporaryStorage }) => {
  return (
    <form onSubmit={e => temporaryStorage(e, {form : "A2"})}>
      <Info />
      <A2Top onProductsDescription={onProductsDescription}/>
      <A2Bottom onInspectionDescription={onInspectionDescription}/>
      <ButtonBox>
        <TemporaryStorageButton temporaryStorage={temporaryStorage} form="A2" path="save"/>
        <InspectionCompleteButton temporaryStorage={temporaryStorage} form="A2" path="complete"/>
      </ButtonBox>
    </form>
  );
};

export default A2Form;
