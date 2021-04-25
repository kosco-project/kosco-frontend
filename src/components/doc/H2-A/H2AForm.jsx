import React from 'react';
import styled from 'styled-components';
import DynInspectionCompleteButton from '../common/DynInspectionCompleteButton';
import DynTemporaryStorageButton from '../common/DynTemporaryStorageButton';
import Info from '../common/Info';
import H2ABottom from './H2ABottom';
import H2ATop from './H2ATop';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
    cursor: pointer;
  }`;

const H2AForm = ({ onChange, onRemove, onInsert, lists, onChangeTextArea, units, showModal, showCommModal }) => {

  return (
    <form>
      <Info />
      <H2ATop onChange={onChange} onRemove={onRemove} onInsert={onInsert} lists={lists} units={units}/>
      <H2ABottom onChangeTextArea={onChangeTextArea}/>
      <ButtonBox>
        <DynTemporaryStorageButton showModal={showModal}/>
        <DynInspectionCompleteButton showCommModal={showCommModal}/>
      </ButtonBox>
    </form>
  );
};

export default H2AForm;
