import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useGetFetch from '../../../hooks/useGetFetch';

import Info from '../../common/Info';
import I1Top from './I1Top';
import I1Bottom from './I1Bottom';
import TemporaryStorageButton from '../../common/TemporaryStorageButton';
import InspectionCompleteButton from '../../common/InspectionCompleteButton';

import I1_INIT from '../../../docsInitialState/I1';
import { initialize, resetInitialState } from '../../../redux/modules/docsInput';
import GobackButton from '../../common/GobackButton';


const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
  }`;

const I1Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useGetFetch(I1_INIT);

  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
    dispatch(initialize(state));

    return () => {
      dispatch(resetInitialState());
    }
  }, [dispatch, history, state]);

  return (
    <form>
      <Info />
      <I1Top />
      <I1Bottom />
      <ButtonBox>
        <GobackButton />
        <TemporaryStorageButton />
        <InspectionCompleteButton />
      </ButtonBox>
    </form>
  );
};

export default I1Form;
