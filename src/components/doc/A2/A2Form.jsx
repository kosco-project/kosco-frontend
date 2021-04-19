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

const A2Form = ({ onProductsDescription, onInspectionDescription, onStorage, showModal, showCommModal }) => {
  return (
    <form >
      <Info />
      <A2Top onProductsDescription={onProductsDescription}/>
      <A2Bottom onInspectionDescription={onInspectionDescription}/>
      <ButtonBox>
        <TemporaryStorageButton onStorage={onStorage} showModal={showModal}/>
        <InspectionCompleteButton onStorage={onStorage} showCommModal={showCommModal}/>
      </ButtonBox>
    </form>
  );
};

export default A2Form;
