import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useGetFetch from '../../../hooks/useGetFetch';

import F2Info from './F2Info';
import F2Top from './F2Top';
import F2Bottom from './F2Bottom';
import F2Bottom2 from './F2Bottom2';
import F2Bottom3 from './F2Bottom3';
import TemporaryStorageButton from '../../common/TemporaryStorageButton';
import InspectionCompleteButton from '../../common/InspectionCompleteButton';

import F2_INIT from '../../../docsInitialState/F2';
import { initialize, resetInitialState } from '../../../redux/modules/docsInput';
import GobackButton from '../../common/GobackButton';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
    cursor: pointer;
  }`;


const F2Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useGetFetch(F2_INIT);

  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
    dispatch(initialize(state));

    return () => {
      dispatch(resetInitialState());
    }
  }, [dispatch, history, state]);

  return (
    <form>
      <F2Info />
      <F2Top />
      <F2Bottom />
      <F2Bottom2 />
      <F2Bottom3 />
      <ButtonBox>
        <GobackButton />
        <TemporaryStorageButton />
        <InspectionCompleteButton />
      </ButtonBox>
    </form>
  );
};

export default F2Form;
