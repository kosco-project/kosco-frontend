import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import useGetFetch from '../../../hooks/useGetFetch';

import P1Info from './P1Info';
import P1Top from './P1Top';
import P1Bottom from './P1Bottom';
import TemporaryStorageButton from '../../common/TemporaryStorageButton';
import InspectionCompleteButton from '../../common/InspectionCompleteButton';

import P1_INIT from '../../../docsInitialState/P1';
import { initialize, resetInitialState } from '../../../redux/modules/docsInput';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
  }`;


const P1Form = ({ onChange, onRemove, onInsert, onChangeTextArea, showModal, showCommModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useGetFetch(P1_INIT);

  useEffect(() => {
    if (!sessionStorage.getItem('KOSCO_token')) history.push('/');
    dispatch(initialize(state));

    return () => {
      dispatch(resetInitialState());
    }
  }, [dispatch, history, state]);

  return (
    <form>
      <P1Info />
      <P1Top onChange={onChange} onRemove={onRemove} onInsert={onInsert} />
      <P1Bottom onChangeTextArea={onChangeTextArea}/>
      <ButtonBox>
        <TemporaryStorageButton />
        <InspectionCompleteButton />
      </ButtonBox>
    </form>
  );
};

export default P1Form;
