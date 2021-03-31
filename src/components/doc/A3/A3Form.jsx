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

const A3Form = ({ units, onWorkingSystemChecked, onWorkingSystem, temporaryStorage }) => {
  return (
    <form onSubmit={e => temporaryStorage(e, { form: "A3" })}>
      <Info />
      <A3Top units={units} onWorkingSystem={onWorkingSystem}/>
      <A3Bottom onWorkingSystemChecked={onWorkingSystemChecked} onWorkingSystem={onWorkingSystem} />
      <ButtonBox>
        <TemporaryStorageButton temporaryStorage={temporaryStorage} form="A1" path="save"/>
        <InspectionCompleteButton temporaryStorage={temporaryStorage} form="A1" path="complete"/>
      </ButtonBox>
    </form>
  );
};

export default A3Form;
