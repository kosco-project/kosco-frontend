import React from 'react';
import styled from 'styled-components';
import P1Bottom from './P1Bottom';
import P1Info from './P1Info';
import P1Top from './P1Top';
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


const P1Form = ({ onChange, onRemove, onInsert, onChangeTextArea, showModal, showCommModal }) => {
  return (
    <form>
      <P1Info />
      <P1Top onChange={onChange} onRemove={onRemove} onInsert={onInsert} />
      <P1Bottom onChangeTextArea={onChangeTextArea}/>
      <ButtonBox>
        <DynTemporaryStorageButton showModal={showModal}/>
        <DynInspectionCompleteButton showCommModal={showCommModal}/>
      </ButtonBox>
    </form>
  );
};

export default P1Form;
