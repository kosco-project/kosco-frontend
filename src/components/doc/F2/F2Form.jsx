import React from 'react';
import styled from 'styled-components';
import F2Bottom from './F2Bottom';
import F2Bottom2 from './F2Bottom2';
import F2Bottom3 from './F2Bottom3';
import F2Info from './F2Info';
import F2Top from './F2Top';
import DynTemporaryStorageButton from '../common/DynTemporaryStorageButton';
import DynInspectionCompleteButton from '../common/DynInspectionCompleteButton';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
    cursor: pointer;
  }`;


const F2Form = ({ onChange, onChangeD2, onRemove, onInsert, lists, onChecked, showModal, showCommModal }) => {
  return (
    <form>
      <F2Info />
      <F2Top onChange={onChange} onRemove={onRemove} onInsert={onInsert} lists={lists}/>
      <F2Bottom onChecked={onChecked} onChangeD2={onChangeD2}/>
      <F2Bottom2 onChangeD2={onChangeD2}/>
      <F2Bottom3 onChangeD2={onChangeD2}/>
      <ButtonBox>
        <DynTemporaryStorageButton showModal={showModal}/>
        <DynInspectionCompleteButton showCommModal={showCommModal}/>
      </ButtonBox>
    </form>
  );
};

export default F2Form;
