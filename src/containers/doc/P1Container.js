import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';
import P1Form from '../../components/doc/P1/P1Form';
import useStorage from '../../hooks/useStorage';
import {
  addInitialState,
  changeField,
  changeTextArea,
  deleteInitialState,
  storage,
} from '../../redux/modules/p1';

const P1Container = () => {
  const dispatch = useDispatch();
  const nextId = useRef(1);
  const p1state = useSelector(state => state.p1);
  const {
    visible,
    showModal,
    commVisible,
    showCommModal,
    hideModal,
  } = useStorage();

  const onRemove = useCallback(
    id => {
      dispatch(deleteInitialState(id));
    },
    [dispatch]
  );

  const onInsert = useCallback(() => {
    dispatch(addInitialState(Object.keys(p1state.D1).length));
  }, [dispatch, p1state.D1]);

  const onChange = ({ id, target }) => {
    const { value, name } = target;
    dispatch(
      changeField({
        id,
        value,
        name,
      })
    );
  };

  const onChangeTextArea = e => {
    const { value } = e.target;
    dispatch(changeTextArea(value));
  };

  const onStorage = async (e, form, path) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/doc/${form}/inspection/${path}`,
        p1state,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}`,
          },
        }
      );
      hideModal();
      console.log('res', res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    dispatch(
      storage({
        RCVNO: localStorage.getItem('rcvNo'),
        VESSELNM: localStorage.getItem('shipNm'),
      })
    );
  }, [dispatch]);

  return (
    <>
      {visible && (
        <SaveModal
          form='P1'
          path='save'
          onStorage={onStorage}
          hP1deModal={hideModal}
        />
      )}
      {commVisible && (
        <CompleteModal
          form='P1'
          path='complete'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      <P1Form
        onChange={onChange}
        onRemove={onRemove}
        onInsert={onInsert}
        onChangeTextArea={onChangeTextArea}
        showModal={showModal}
        showCommModal={showCommModal}
      />
    </>
  );
};

export default P1Container;
