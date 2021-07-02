import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resetInitialState, initialize } from '../../../redux/modules/docsInput';

import useGetFetch from '../../../hooks/useGetFetch';

import Info from '../common/Info';
import A3Top from './A3Top';
import A3Bottom from './A3Bottom';
import InspectionCompleteButton from '../common/InspectionCompleteButton';
import TemporaryStorageButton from '../common/TemporaryStorageButton';

import A3_INIT from '../../../docsInitialState/A3';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
  }`;

const A3Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useGetFetch(A3_INIT);

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
      <A3Top />
      <A3Bottom />
      <ButtonBox>
        <TemporaryStorageButton />
        <InspectionCompleteButton />
      </ButtonBox>
    </form>
  );
};

export default A3Form;
