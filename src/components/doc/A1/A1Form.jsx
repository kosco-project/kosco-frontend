import React from 'react';
import styled from 'styled-components';
import A1Bottom from './A1Bottom';
import A1Top from './A1Top';
import TemporaryStorageButton from '../common/TemporaryStorageButton';
import InspectionCompleteButton from '../common/InspectionCompleteButton';
import Info from '../common/Info';
import FetchModal from "../../common/FetchModal";
import useModal from '../../../hooks/useModal';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
  }`;
const A1Form = () => {
  return (
    <form>
      <Info />
      <A1Top />
      <A1Bottom />
      <ButtonBox>
        <TemporaryStorageButton />
        <InspectionCompleteButton />
      </ButtonBox>
    </form>
  );
};

export default A1Form;
