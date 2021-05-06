import React from 'react';
import styled from 'styled-components';
import Info from '../common/Info';
import InspectionCompleteButton from '../common/InspectionCompleteButton';
import TemporaryStorageButton from '../common/TemporaryStorageButton';
import B3Bottom from './B3Bottom';
import B3Bottom2 from './B3Bottom2';
import B3Top from './B3Top';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
  }`;

const B3Form = ({ units, onWorkingSystem, onWorkingSystemChecked, onKeyValueForm, showModal, showCommModal, state }) => {
  return (
    <form>
      <Info />
      <B3Top units={units} onWorkingSystem={onWorkingSystem} state={state} />
      <B3Bottom onWorkingSystemChecked={onWorkingSystemChecked} onWorkingSystem={onWorkingSystem} state={state} />
      <B3Bottom2 onKeyValueForm={onKeyValueForm} onWorkingSystem={onWorkingSystem} state={state} />
      <ButtonBox>
        <TemporaryStorageButton showModal={showModal}/>
        <InspectionCompleteButton showCommModal={showCommModal}/>
      </ButtonBox>
    </form>
  );
};

export default B3Form;