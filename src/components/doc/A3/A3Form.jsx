import React from 'react';
import styled from 'styled-components';
import Info from '../common/Info';
import InspectionCompleteButton from '../common/InspectionCompleteButton';
import TemporaryStorageButton from '../common/TemporaryStorageButton';
import A3Bottom from './A3Bottom';
import A3Top from './A3Top';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
  }`;

const A3Form = ({ units, onWorkingSystemChecked, onWorkingSystem, onStorage, showModal, showCommModal }) => {
  return (
    <form>
      <Info />
      <A3Top units={units} onWorkingSystem={onWorkingSystem}/>
      <A3Bottom onWorkingSystemChecked={onWorkingSystemChecked} onWorkingSystem={onWorkingSystem} />
      <ButtonBox>
        <TemporaryStorageButton onStorage={onStorage} showModal={showModal}/>
        <InspectionCompleteButton onStorage={onStorage} showCommModal={showCommModal}/>
      </ButtonBox>
    </form>
  );
};

export default A3Form;
