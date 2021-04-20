import React from 'react';
import styled from 'styled-components';
import Info from '../common/Info';
import B1Top from './B1Top';
import DynTemporaryStorageButton from '../common/DynTemporaryStorageButton';
import DynInspectionCompleteButton from '../common/DynInspectionCompleteButton';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
  }`;

const B1Form = ({ onChange, onRemove, onInsert, lists, showModal, showCommModal }) => {
  return (
    <form>
      <Info />
      <B1Top onChange={onChange} onRemove={onRemove} onInsert={onInsert} lists={lists}/>
      <ButtonBox>
        <DynTemporaryStorageButton showModal={showModal}/>
        <DynInspectionCompleteButton showCommModal={showCommModal}/>
      </ButtonBox>
    </form>
  );
};

export default B1Form;
