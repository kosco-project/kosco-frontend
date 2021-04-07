import React from 'react';
import styled from 'styled-components';
import DynInspectionCompleteButton from '../common/DynInspectionCompleteButton';
import DynTemporaryStorageButton from '../common/DynTemporaryStorageButton';import Info from '../common/Info';
import H4Bottom from './H4Bottom';
import H4Top from './H4Top';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
    cursor: pointer;
  }`;

const H4Form = ({ onChange, onRemove, onInsert, lists, onStorage, onChangeTextArea, units }) => {
  return (
    <form>
      <Info />
      <H4Top onChange={onChange} onRemove={onRemove} onInsert={onInsert} lists={lists} units={units}/>
      <H4Bottom onChangeTextArea={onChangeTextArea}/>
      <ButtonBox>
        <DynTemporaryStorageButton onStorage={onStorage} form="H4" path="save"/>
        <DynInspectionCompleteButton onStorage={onStorage} form="H4" path="complete"/>
      </ButtonBox>
    </form>
  );
};

export default H4Form;
