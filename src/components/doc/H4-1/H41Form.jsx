import React from 'react';
import styled from 'styled-components';
import DynInspectionCompleteButton from '../common/DynInspectionCompleteButton';
import DynTemporaryStorageButton from '../common/DynTemporaryStorageButton';
import Info from '../common/Info';
import H41Bottom from './H41Bottom';
import H41Top from './H41Top';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
    cursor: pointer;
  }`;

const H41Form = ({ onChange, onRemove, onInsert, lists, onStorage, onChangeTextArea }) => {
  return (
    <form>
      <Info />
      <H41Top onChange={onChange} onRemove={onRemove} onInsert={onInsert} lists={lists}/>
      <H41Bottom onChangeTextArea={onChangeTextArea}/>
      <ButtonBox>
        <DynTemporaryStorageButton onStorage={onStorage} form="H4-1" path="save"/>
        <DynInspectionCompleteButton onStorage={onStorage} form="H4-1" path="complete"/>
      </ButtonBox>
    </form>
  );
};

export default H41Form;
