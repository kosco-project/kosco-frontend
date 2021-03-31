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

const CForm = ({ onWorkingSystem, onWorkingSystemChecked, onKeyValueForm, temporaryStorage }) => {
  return (
    <form onSubmit={e => temporaryStorage(e, { form: "C" })}>
      <Info />
      <CTop onKeyValueForm={onKeyValueForm}/>
      <CBottom onWorkingSystemChecked={onWorkingSystemChecked} onWorkingSystem={onWorkingSystem}/>
      <ButtonBox>
        <TemporaryStorageButton temporaryStorage={temporaryStorage} form="C" path="save"/>
        <InspectionCompleteButton temporaryStorage={temporaryStorage} form="C" path="complete"/>
      </ButtonBox>
    </form>
  );
};

export default CForm;
