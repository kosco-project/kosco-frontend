import React from 'react';
import styled from 'styled-components';
import Info from '../common/Info';
import InspectionCompleteButton from '../common/InspectionCompleteButton';
import TemporaryStorageButton from '../common/TemporaryStorageButton';
import WBottom from './WBottom';
import WBottom2 from './WBottom2';
import WTop from './WTop';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
  }`;

const WForm = ({ checkState, onWorkingSystem, state, onChangeTextArea, onStorage, onKeyValueForm, onChangeCovering }) => {
  return (
    <form>
      <Info />
      <WTop onKeyValueForm={onKeyValueForm} state={state} onChangeCovering={onChangeCovering}/>
      <WBottom checkState={checkState} onWorkingSystem={onWorkingSystem} state={state} />
      <WBottom2 onChangeTextArea={onChangeTextArea}/>
      <ButtonBox>
        <TemporaryStorageButton onStorage={onStorage} form="W" path="save"/>
        <InspectionCompleteButton onStorage={onStorage} form="W" path="complete"/>
      </ButtonBox>
    </form>
  );
};

export default WForm;
