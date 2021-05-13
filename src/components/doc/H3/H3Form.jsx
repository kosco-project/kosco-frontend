import React from 'react';
import styled from 'styled-components';
import DynInspectionCompleteButton from '../common/DynInspectionCompleteButton';
import DynTemporaryStorageButton from '../common/DynTemporaryStorageButton';
import Info from '../common/Info';
import H3Bottom from './H3Bottom';
import H3Bottom2 from './H3Bottom2';
import H3Top from './H3Top';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
    cursor: pointer;
  }`;

const H3Form = ({ onChangeD1, onChange, onRemove, onInsert, onChangeTextArea, datas, onInsertD2, onRemoveD2, showModal, showCommModal }) => {
  return (
    <form>
      <Info />
      <H3Top datas={datas} onRemove={onRemove} onInsert={onInsert} onChangeD1={onChangeD1} />
      <H3Bottom onInsertD2={onInsertD2} onRemoveD2={onRemoveD2} onChange={onChange} />
      <H3Bottom2 onChangeTextArea={onChangeTextArea}/>
      <ButtonBox>
        <DynTemporaryStorageButton showModal={showModal}/>
        <DynInspectionCompleteButton showCommModal={showCommModal}/>
      </ButtonBox>
    </form>
  );
};

export default H3Form;
