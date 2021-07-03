import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resetInitialState, initialize } from '../../../redux/modules/docsInput';

import useGetFetch from '../../../hooks/useGetFetch';

import Info from '../../common/Info';
import A1Top from './A1Top';
import A1Bottom from './A1Bottom';
import InspectionCompleteButton from '../../common/InspectionCompleteButton';
import TemporaryStorageButton from '../../common/TemporaryStorageButton';

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
  const history = useHistory();
  const state = useGetFetch(A1_INIT);
  const RCVNO =  JSON.parse(localStorage.getItem('rcvNo'))
  const VESSELNM=  JSON.parse(localStorage.getItem('shipNm'))
  const CERTNO = JSON.parse(localStorage.getItem('certNo'))
  console.log(RCVNO, VESSELNM, CERTNO);
  
  useEffect(() => {
    console.log(A1_INIT);
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
    dispatch(initialize(state));

    return () => {
      dispatch(resetInitialState());
    }
  }, [dispatch, history, state]);

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
