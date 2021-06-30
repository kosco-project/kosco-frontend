import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteInitialState, initialize } from '../../../redux/modules/docsInput';

import useGetFetch from '../../../hooks/useGetFetch';

import Info from '../common/Info';
import A2Top from './A2Top';
import A2Bottom from './A2Bottom';
import TemporaryStorageButton from '../common/TemporaryStorageButton';
import InspectionCompleteButton from '../common/InspectionCompleteButton';

import A2_INIT from '../../../docsInitialState/A2';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
  }`;

const A2Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useGetFetch(A2_INIT);

  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
    dispatch(initialize(state));

    return () => {
      dispatch(deleteInitialState());
    }
  }, [dispatch, history, state]);

  

  return (
    <form >
      <Info />
      <A2Top />
      <A2Bottom />
      <ButtonBox>
        <TemporaryStorageButton />
        <InspectionCompleteButton />
      </ButtonBox>
    </form>
  );
};

export default A2Form;
