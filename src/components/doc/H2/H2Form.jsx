import React from 'react';
import styled from 'styled-components';
import DynInspectionCompleteButton from '../common/DynInspectionCompleteButton';
import DynTemporaryStorageButton from '../common/DynTemporaryStorageButton';
import Info from '../common/Info';
import H2Bottom from './H2Bottom';
import H2Top from './H2Top';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
    cursor: pointer;
  }`;

const H2Form = ({ onChange, onRemove, onInsert, lists, onStorage, onChangeTextArea, units }) => {
  return (
    <form>
      <Info />
      <H2Top onChange={onChange} onRemove={onRemove} onInsert={onInsert} lists={lists} units={units}/>
      <H2Bottom onChangeTextArea={onChangeTextArea}/>
      <ButtonBox>
        <DynTemporaryStorageButton onStorage={onStorage} form="H2" path="save"/>
        <DynInspectionCompleteButton onStorage={onStorage} form="H2" path="complete"/>
      </ButtonBox>
    </form>
  );
};

export default H2Form;
