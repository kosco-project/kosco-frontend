import React from 'react';
import styled from 'styled-components';
import Info from '../common/Info';
import InspectionCompleteButton from '../common/InspectionCompleteButton';
import TemporaryStorageButton from '../common/TemporaryStorageButton';
import CBottom from './CBottom';
import CTop from './CTop';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
  }`;

const CForm = ({ onWorkingSystem, checkState, onKeyValueForm, state, showModal, showCommModal }) => {
  return (
    <form>
      <Info />
      <CTop onKeyValueForm={onKeyValueForm}/>
      <CBottom checkState={checkState} onWorkingSystem={onWorkingSystem} state={state}/>
      <ButtonBox>
        <TemporaryStorageButton showModal={showModal}/>
        <InspectionCompleteButton showCommModal={showCommModal}/>
      </ButtonBox>
    </form>
  );
};

export default CForm;
