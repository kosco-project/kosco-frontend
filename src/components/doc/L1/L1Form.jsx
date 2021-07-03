import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useGetFetch from '../../../hooks/useGetFetch';

import L1Info from './L1Info';
import L1Top from './L1Top';
import TemporaryStorageButton from '../../common/TemporaryStorageButton';
import InspectionCompleteButton from '../../common/InspectionCompleteButton';

import L1_INIT from '../../../docsInitialState/L1';
import { initialize, resetInitialState } from '../../../redux/modules/docsInput';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 20px 15px;
  }`;


const L1Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useGetFetch(L1_INIT);

  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
    dispatch(initialize(state));

    return () => {
      dispatch(resetInitialState());
    }
  }, [dispatch, history, state]);

  return (
    <form>
      <L1Info />
      <L1Top  />
      <ButtonBox>
        <TemporaryStorageButton />
        <InspectionCompleteButton />
      </ButtonBox>
    </form>
  );
};

export default L1Form;
