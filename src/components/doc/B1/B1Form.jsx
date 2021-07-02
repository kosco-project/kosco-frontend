import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resetInitialState, initialize } from '../../../redux/modules/docsInput';

import useGetFetch from '../../../hooks/useGetFetch';

import Info from '../common/Info';
import B1Top from './B1Top';
import TemporaryStorageButton from '../common/TemporaryStorageButton';
import InspectionCompleteButton from '../common/InspectionCompleteButton';

import B1_INIT from "../../../docsInitialState/B1";

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
  }`;

const B1Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useGetFetch(B1_INIT);

  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');

    if (Object.keys(state.D1).length === 0) dispatch(initialize(B1_INIT));
    else dispatch(initialize(state));

    return () => {
      dispatch(resetInitialState());
    }
  }, [dispatch, history, state]);
  
  return (
    <form>
      <Info />
      <B1Top />
      <ButtonBox>
        <TemporaryStorageButton />
        <InspectionCompleteButton />
      </ButtonBox>
    </form>
  );
};

export default B1Form;
