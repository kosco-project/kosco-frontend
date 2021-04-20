import React from 'react';
import styled from 'styled-components';
import DynInspectionCompleteButton from '../common/DynInspectionCompleteButton';
import DynTemporaryStorageButton from '../common/DynTemporaryStorageButton';import Info from '../common/Info';
import H1Bottom from './H1Bottom';
import H1Bottom2 from './H1Bottom2';
import H1Top from './H1Top';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
    cursor: pointer;
  }`;

const H1Form = ({ onChangeD1, onChange, onRemove, onInsert, onChangeTextArea, onStorage, lists, D2Lists, datas, onInsertD2, onRemoveD2, showModal, showCommModal }) => {
  return (
    <form>
      <Info />
      <H1Top datas={datas} lists={lists} onRemove={onRemove} onInsert={onInsert} onChangeD1={onChangeD1}/>
      <H1Bottom onInsertD2={onInsertD2} onRemoveD2={onRemoveD2} onChange={onChange} D2Lists={D2Lists}/>
      <H1Bottom2 onChangeTextArea={onChangeTextArea}/>
      <ButtonBox>
        <DynTemporaryStorageButton onStorage={onStorage} showModal={showModal}/>
        <DynInspectionCompleteButton onStorage={onStorage} showCommModal={showCommModal}/>
      </ButtonBox>
    </form>
  );
};

export default H1Form;
