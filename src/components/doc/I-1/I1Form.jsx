import React from 'react';
import styled from 'styled-components';
import Info from '../common/Info';
import I1Bottom from './I1Bottom';
import I1Top from './I1Top';
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

const I1Form = ({ onChange, onRemove, onInsert, units, onChangeTextArea, showModal, showCommModal }) => {
  return (
    <form>
      <Info />
      <I1Top units={units} onChange={onChange} onRemove={onRemove} onInsert={onInsert} />
      <I1Bottom onChangeTextArea={onChangeTextArea}/>
      <ButtonBox>
        <DynTemporaryStorageButton showModal={showModal}/>
        <DynInspectionCompleteButton showCommModal={showCommModal}/>
      </ButtonBox>
    </form>
  );
};

export default I1Form;
