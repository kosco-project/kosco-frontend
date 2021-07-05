import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useGetFetch from '../../../hooks/useGetFetch';

import Info from '../../common/Info';
import H1Top from './H1Top';
import H1Bottom from './H1Bottom';
import H1Bottom2 from './H1Bottom2';
import TemporaryStorageButton from '../../common/TemporaryStorageButton';
import InspectionCompleteButton from '../../common/InspectionCompleteButton';

import { H_INIT } from '../../../docsInitialState/H';
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

const H1Form = ({ onChangeD1, onChange, onRemove, onInsert, onChangeTextArea, datas, onInsertD2, onRemoveD2, showModal, showCommModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useGetFetch(H_INIT);

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
      <H1Top datas={datas} onRemove={onRemove} onInsert={onInsert} onChangeD1={onChangeD1}/>
      <H1Bottom onInsertD2={onInsertD2} onRemoveD2={onRemoveD2} onChange={onChange} />
      <H1Bottom2 onChangeTextArea={onChangeTextArea}/>
      <ButtonBox>
        <GobackButton />
        <TemporaryStorageButton />
        <InspectionCompleteButton />
      </ButtonBox>
    </form>
  );
};

export default H1Form;
