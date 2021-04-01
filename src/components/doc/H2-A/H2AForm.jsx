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

const H2AForm = ({ onChange, onRemove, onInsert, lists, onStorage, onChangeTextArea }) => {
  return (
    <form>
      <Info />
      <H2ATop onChange={onChange} onRemove={onRemove} onInsert={onInsert} lists={lists}/>
      <H2ABottom onChangeTextArea={onChangeTextArea}/>
      <ButtonBox>
        <DynTemporaryStorageButton onStorage={onStorage} form="H2-A" path="save"/>
        <DynInspectionCompleteButton onStorage={onStorage} form="H2-A" path="complete"/>
      </ButtonBox>
    </form>
  );
};

export default H2AForm;
