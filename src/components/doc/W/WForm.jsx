import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useGetFetch from '../../../hooks/useGetFetch';

import Info from '../../common/Info';
import WTop from './WTop';
import WBottom from './WBottom';
import WBottom2 from './WBottom2';
import TemporaryStorageButton from '../../common/TemporaryStorageButton';
import InspectionCompleteButton from '../../common/InspectionCompleteButton';

import { W_INIT } from '../../../docsInitialState/W';
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

const WForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useGetFetch(W_INIT);

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
      <WTop />
      <WBottom />
      <WBottom2 />
      <ButtonBox>
        <GobackButton />
        <TemporaryStorageButton />
        <InspectionCompleteButton />
      </ButtonBox>
    </form>
  );
};

export default WForm;
