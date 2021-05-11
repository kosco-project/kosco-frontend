import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';
import FForm from '../../components/doc/F/FForm';
import {
  addInitialState,
  changeField,
  changeTextArea,
  deleteInitialState,
  fInitialize,
  getFdata,
  getFh,
  storage,
} from '../../redux/modules/f';
import useStorage from '../../hooks/useStorage';
import getItemData from '../../components/common/getItemData';

const FContainer = () => {
  const dispatch = useDispatch();
  const nextId = useRef(4);
  const fstate = useSelector(state => state.f);

  const history = useHistory();

  const {
    visible,
    showModal,
    commVisible,
    showCommModal,
    hideModal,
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
        (nextId.current = Object.keys(fstate.D1).length
          ? Math.max(...Object.keys(fstate.D1).map(list => +list)) + 1
          : 0)
      )
    );
  }, [fstate.D1, dispatch]);

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
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/doc/${form}/inspection/${path}`,
        fstate,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('KOSCO_token')}`,
          },
        }
      );

      hideModal();
      await history.push('/inspection');
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    (async () => {
      dispatch(
        getFh({
          RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
          VESSELNM: JSON.parse(localStorage.getItem('shipNm')),
          CERTNO: JSON.parse(localStorage.getItem('certNo')) || null,
        })
      );
      const data = await getItemData(setState);

      if (!data) return;

      await dispatch(getFdata(data));
    })();

    return () => {
      dispatch(fInitialize());
    };
  }, [dispatch, setState]);

  return (
    <>
      {visible && (
        <SaveModal
          form='F'
          path='save'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      {commVisible && (
        <CompleteModal
          form='F'
          path='complete'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      <FForm
        onChange={onChange}
        onChangeTextArea={onChangeTextArea}
        onRemove={onRemove}
        onInsert={onInsert}
        showModal={showModal}
        showCommModal={showCommModal}
      />
    </>
  );
};

export default FContainer;
