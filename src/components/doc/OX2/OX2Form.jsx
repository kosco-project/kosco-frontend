import React from 'react';
import styled from 'styled-components';
import DynInspectionCompleteButton from '../common/DynInspectionCompleteButton';
import DynTemporaryStorageButton from '../common/DynTemporaryStorageButton';
import Info from '../common/Info';
import OX2Bottom from './OX2Bottom';
import OX2Bottom2 from './OX2Bottom2';
import OX2Top from './OX2Top';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
    cursor: pointer;
  }`;

const OX2Form = ({ onChangeD1, onChange, onRemove, onInsert, onChangeTextArea, lists, D2Lists, datas, onInsertD2, onRemoveD2, units, onChangeDatePicker, showModal, showCommModal }) => {
  return (
    <form>
      <Info />
      <OX2Top datas={datas} lists={lists} onRemove={onRemove} onInsert={onInsert} onChangeD1={onChangeD1}/>
      <OX2Bottom onInsertD2={onInsertD2} onRemoveD2={onRemoveD2} onChange={onChange} D2Lists={D2Lists} units={units} onChangeDatePicker={onChangeDatePicker}/>
      <OX2Bottom2 onChangeTextArea={onChangeTextArea}/>
      <ButtonBox>
        <DynTemporaryStorageButton showModal={showModal}/>
        <DynInspectionCompleteButton showCommModal={showCommModal}/>
      </ButtonBox>
    </form>
  );
};

export default OX2Form;
