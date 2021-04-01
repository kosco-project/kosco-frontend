import React from 'react';
import styled from 'styled-components';
import A1Bottom from './A1Bottom';
import A1Top from './A1Top';
import TemporaryStorageButton from '../common/TemporaryStorageButton';
import InspectionCompleteButton from '../common/InspectionCompleteButton';
import Info from '../common/Info';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
  }`;
const A1Form = ({ onProductsDescription, onInspectionDescription, onStorage }) => {

  return (
    <form>
      <Info />
      <A1Top onProductsDescription={onProductsDescription}/>
      <A1Bottom onInspectionDescription={onInspectionDescription} />
      <ButtonBox>
        <TemporaryStorageButton onStorage={onStorage} form="A1" path="save"/>
        <InspectionCompleteButton onStorage={onStorage} form="A1" path="complete"/>
      </ButtonBox>
    </form>
  );
};

export default A1Form;
