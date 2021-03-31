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

const B3Form = ({ units, onWorkingSystem, onWorkingSystemChecked, onKeyValueForm, temporaryStorage }) => {
  return (
    <form onSubmit={e => temporaryStorage(e, { form: "B3" })}>
      <Info />
      <B3Top units={units} onWorkingSystem={onWorkingSystem}/>
      <B3Bottom onWorkingSystemChecked={onWorkingSystemChecked} onWorkingSystem={onWorkingSystem}/>
      <B3Bottom2 onKeyValueForm={onKeyValueForm}/>
      <ButtonBox>
        <TemporaryStorageButton temporaryStorage={temporaryStorage} form="B3" path="save"/>
        <InspectionCompleteButton temporaryStorage={temporaryStorage} form="B3" path="complete"/>
      </ButtonBox>
    </form>
  );
};

export default B3Form;
