import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import B3_INIT from '../../../docsInitialState/B3';
import useGetFetch from '../../../hooks/useGetFetch';
import { initialize, resetInitialState } from '../../../redux/modules/docsInput';
import Info from '../common/Info';
import InspectionCompleteButton from '../common/InspectionCompleteButton';
import TemporaryStorageButton from '../common/TemporaryStorageButton';
import B3Bottom from './B3Bottom';
import B3Bottom2 from './B3Bottom2';
import B3Top from './B3Top';

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  text-align: center;
  Button {
    margin: 0 15px;
  }`;

const B3Form = ({ units, onWorkingSystem, onWorkingSystemChecked, onKeyValueForm, showModal, showCommModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useGetFetch(B3_INIT);

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
      <B3Top units={units} onWorkingSystem={onWorkingSystem} state={state} />
      <B3Bottom onWorkingSystemChecked={onWorkingSystemChecked} onWorkingSystem={onWorkingSystem} state={state} />
      <B3Bottom2 onKeyValueForm={onKeyValueForm} onWorkingSystem={onWorkingSystem} state={state} />
      <ButtonBox>
        <TemporaryStorageButton showModal={showModal}/>
        <InspectionCompleteButton showCommModal={showCommModal}/>
      </ButtonBox>
    </form>
  );
};

export default B3Form;