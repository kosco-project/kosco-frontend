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

const H3Form = ({ onChangeD1, onChange, onRemove, onInsert, onChangeTextArea, onStorage, lists, D2Lists, datas, onInsertD2, onRemoveD2  }) => {
  return (
    <form>
      <Info />
      <H3Top datas={datas} lists={lists} onRemove={onRemove} onInsert={onInsert} onChangeD1={onChangeD1}/>
      <H3Bottom onInsertD2={onInsertD2} onRemoveD2={onRemoveD2} onChange={onChange} D2Lists={D2Lists}/>
      <H3Bottom2 onChangeTextArea={onChangeTextArea}/>
      <ButtonBox>
        <DynTemporaryStorageButton onStorage={onStorage} form="H3" path="save"/>
        <DynInspectionCompleteButton onStorage={onStorage} form="H3" path="complete"/>
      </ButtonBox>
    </form>
  );
};

export default H3Form;
