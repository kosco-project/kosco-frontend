import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useGetFetch from '../../../hooks/useGetFetch';

import Info from '../../common/Info';
import OX2Top from './OX2Top';
import OX2Bottom from './OX2Bottom';
import OX2Bottom2 from './OX2Bottom2';
import TemporaryStorageButton from '../../common/TemporaryStorageButton';
import InspectionCompleteButton from '../../common/InspectionCompleteButton';

import { OX2_INIT } from '../../../docsInitialState/OX2';
import { initialize, resetInitialState } from '../../../redux/modules/docsInput';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
    cursor: pointer;
  }`;

const OX2Form = ({ onChangeD1, onChange, onRemove, onInsert, onChangeTextArea, datas, onInsertD2, onRemoveD2, units, onChangeDatePicker, showModal, showCommModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useGetFetch(OX2_INIT);

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
      <OX2Top datas={datas} onRemove={onRemove} onInsert={onInsert} onChangeD1={onChangeD1}/>
      <OX2Bottom onInsertD2={onInsertD2} onRemoveD2={onRemoveD2} onChange={onChange} units={units} onChangeDatePicker={onChangeDatePicker}/>
      <OX2Bottom2 onChangeTextArea={onChangeTextArea}/>
      <ButtonBox>
        <TemporaryStorageButton />
        <InspectionCompleteButton />
      </ButtonBox>
    </form>
  );
};

export default OX2Form;
