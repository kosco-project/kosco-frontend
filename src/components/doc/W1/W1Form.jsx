import React from 'react';
import styled from 'styled-components';
import Info from '../common/Info';
import InspectionCompleteButton from '../common/InspectionCompleteButton';
import TemporaryStorageButton from '../common/TemporaryStorageButton';
import W1Bottom from './W1Bottom';
import W1Bottom2 from './W1Bottom2';
import W1Top from './W1Top';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
  }`;

const W1Form = ({ checkState, state, onWorkingSystem, onKeyValueForm, onStorage }) => {
  return (
    <form>
      <Info />
      <W1Top onKeyValueForm={onKeyValueForm}/>
      <W1Bottom checkState={checkState} state={state} onWorkingSystem={onWorkingSystem}/>
      <W1Bottom2 />
      <ButtonBox>
        <TemporaryStorageButton onStorage={onStorage} form="W1" path="save"/>
        <InspectionCompleteButton onStorage={onStorage} form="W1" path="complete"/>
      </ButtonBox>
    </form>
  );
};

export default W1Form;
