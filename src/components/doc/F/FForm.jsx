import React from 'react';
import styled from 'styled-components';
import Info from '../common/Info';
import FBottom from './FBottom';
import FTop from './FTop';
import DynTemporaryStorageButton from '../common/DynTemporaryStorageButton';
import DynInspectionCompleteButton from '../common/DynInspectionCompleteButton';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
    cursor: pointer;
  }`;


const FForm = ({ onChange, onRemove, onInsert, onChangeTextArea, showModal, showCommModal }) => {
  return (
    <form>
      <Info />
      <FTop onChange={onChange} onRemove={onRemove} onInsert={onInsert} />
      <FBottom onChangeTextArea={onChangeTextArea}/>
      <ButtonBox>
        <DynTemporaryStorageButton showModal={showModal}/>
        <DynInspectionCompleteButton showCommModal={showCommModal}/>
      </ButtonBox>
    </form>
  );
};

export default FForm;
