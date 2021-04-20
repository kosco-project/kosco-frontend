import React from 'react';
import styled from 'styled-components';
import DynTemporaryStorageButton from '../common/DynTemporaryStorageButton';
import DynInspectionCompleteButton from '../common/DynInspectionCompleteButton';
import IBottom from './IBottom';
import IBottom2 from './IBottom2';
import IInfo from './IInfo';
import ITop from './ITop';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
  }`;

const IForm = ({ onChange, onRemove, onInsert, lists, onChangeD2, onChecked, showModal, showCommModal }) => {
  return (
    <form>
      <IInfo />
      <ITop onChange={onChange} onRemove={onRemove} onInsert={onInsert} lists={lists} onChangeD2={onChangeD2}/>
      <IBottom onChecked={onChecked}/>
      <IBottom2 />
      <ButtonBox>
        <DynTemporaryStorageButton showModal={showModal}/>
        <DynInspectionCompleteButton showCommModal={showCommModal}/>
      </ButtonBox>
    </form>
  );
};

export default IForm;
