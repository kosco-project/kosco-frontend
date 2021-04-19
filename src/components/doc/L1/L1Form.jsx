import React from 'react';
import styled from 'styled-components';
import L1Info from './L1Info';
import InspectionCompleteButton from '../common/InspectionCompleteButton';
import TemporaryStorageButton from '../common/TemporaryStorageButton';
import L1Top from './L1Top';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 20px 15px;
  }`;


const L1Form = ({ onWorkingSystem, state, onStorage, onchangeDatePicker, showModal, showCommModal }) => {
  return (
    <form>
      <L1Info />
      <L1Top onWorkingSystem={onWorkingSystem} state={state} onchangeDatePicker={onchangeDatePicker}/>
      <ButtonBox>
        <TemporaryStorageButton onStorage={onStorage} showModal={showModal}/>
        <InspectionCompleteButton onStorage={onStorage} showCommModal={showCommModal}/>
      </ButtonBox>
    </form>
  );
};

export default L1Form;
