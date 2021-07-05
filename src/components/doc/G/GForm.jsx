import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useGetFetch from '../../../hooks/useGetFetch';

import Info from '../../common/Info';
import GTop from './GTop';
import GBottom from './GBottom';
import GBottom2 from './GBottom2';
import GBottom3 from './GBottom3';
import TemporaryStorageButton from '../../common/TemporaryStorageButton';
import InspectionCompleteButton from '../../common/InspectionCompleteButton';

import G_INIT from '../../../docsInitialState/G';
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
  
const GForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useGetFetch(G_INIT);

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
      <GTop />
      <GBottom />
      <GBottom2 />
      <GBottom3 />
      <ButtonBox>
        <GobackButton />
        <TemporaryStorageButton />
        <InspectionCompleteButton /> 
      </ButtonBox>
    </form>
  );
};

export default GForm;
