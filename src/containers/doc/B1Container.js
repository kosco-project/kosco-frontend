import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';
import B1Form from '../../components/doc/B1/B1Form';
import useStorage from '../../hooks/useStorage';
import {
  addInitialState,
  changeField,
  deleteInitialState,
  getB1Data,
} from '../../redux/modules/b1';
import getItemData from '../../components/common/getItemData';

const B1Container = () => {
  const dispatch = useDispatch();
  const nextId = useRef(4);
  const b1state = useSelector(state => state.b1);

  const {
    visible,
    showModal,
    commVisible,
    showCommModal,
    hideModal,
    state,
    setState,
  } = useStorage();

  const onRemove = useCallback(
    id => {
      dispatch(deleteInitialState(id));
    },
    [dispatch]
  );
  const onInsert = useCallback(() => {
    dispatch(
      addInitialState(
        (nextId.current = Object.keys(b1state.D1).length
          ? Math.max(...Object.keys(b1state.D1).map(list => +list)) + 1
          : 0)
      )
    );
  }, [b1state.D1, dispatch]);

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

  const onTemporaryStorage = async (e, form, path) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/doc/${form}/inspection/${path}`,
        b1state,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}`,
          },
        }
      );
      hideModal();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getItemData(setState);
      if (Object.keys(data.D1).length === 0) return;
      await dispatch(getB1Data(data));
    })();
  }, [dispatch, setState]);

  return (
    <>
      {visible && (
        <SaveModal
          form='B1'
          path='save'
          onStorage={onTemporaryStorage}
          hideModal={hideModal}
        />
      )}
      {commVisible && (
        <CompleteModal
          form='B1'
          path='complete'
          onStorage={onTemporaryStorage}
          hideModal={hideModal}
        />
      )}
      <B1Form
        onChange={onChange}
        onRemove={onRemove}
        onInsert={onInsert}
        showModal={showModal}
        showCommModal={showCommModal}
        state={state}
      />
    </>
  );
};

export default B1Container;
