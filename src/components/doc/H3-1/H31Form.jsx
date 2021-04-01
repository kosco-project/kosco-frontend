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

const H31Form = ({ onChangeD1, onChange, onRemove, onInsert, onChangeTextArea, onStorage, lists, D2Lists, datas, onInsertD2, onRemoveD2 }) => {
  return (
    <form>
      <Info />
      <H31Top datas={datas} lists={lists} onRemove={onRemove} onInsert={onInsert} onChangeD1={onChangeD1} onChange={onChange}/>
      <H31Bottom onInsertD2={onInsertD2} onRemoveD2={onRemoveD2} onChange={onChange} D2Lists={D2Lists}/>
      <H31Bottom2 onChangeTextArea={onChangeTextArea}/>
      <ButtonBox>
        <DynTemporaryStorageButton onStorage={onStorage} form="H3" path="save"/>
        <DynInspectionCompleteButton onStorage={onStorage} form="H3" path="complete"/>
      </ButtonBox>
    </form>
  );
};

export default H31Form;
