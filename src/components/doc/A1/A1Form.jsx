import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { initialize } from '../../../redux/modules/docsInput';

import useGetFetch from '../../../hooks/useGetFetch';

import Info from '../common/Info';
import A1Top from './A1Top';
import A1Bottom from './A1Bottom';
import InspectionCompleteButton from '../common/InspectionCompleteButton';
import TemporaryStorageButton from '../common/TemporaryStorageButton';

import A1_INIT from '../../../docsInitialState/A1';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
  }`;

const A1Form = () => {
  const dispatch = useDispatch();

  const state = useGetFetch(A1_INIT);

  useEffect(() => {
    dispatch(initialize(state));
  }, [dispatch, state]);


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
