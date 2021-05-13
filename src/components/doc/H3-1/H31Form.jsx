import React from 'react';
import styled from 'styled-components';
import DynInspectionCompleteButton from '../common/DynInspectionCompleteButton';
import DynTemporaryStorageButton from '../common/DynTemporaryStorageButton';
import Info from '../common/Info';
import H31Bottom from './H31Bottom';
import H31Bottom2 from './H31Bottom2';
import H31Top from './H31Top';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
    cursor: pointer;
  }`;

const H31Form = ({ onChangeD1, onChange, onRemove, onInsert, onChangeTextArea, datas, onInsertD2, onRemoveD2, showModal, showCommModal }) => {
  return (
    <form>
      <Info />
      <H31Top datas={datas} onRemove={onRemove} onInsert={onInsert} onChangeD1={onChangeD1} />
      <H31Bottom onInsertD2={onInsertD2} onRemoveD2={onRemoveD2} onChange={onChange} />
      <H31Bottom2 onChangeTextArea={onChangeTextArea}/>
      <ButtonBox>
        <DynTemporaryStorageButton showModal={showModal}/>
        <DynInspectionCompleteButton showCommModal={showCommModal}/>
      </ButtonBox>
    </form>
  );
};

export default H31Form;
