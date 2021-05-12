import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SaveModal from '../../components/common/SaveModal';
import CompleteModal from '../../components/common/CompleteModal';
import GForm from '../../components/doc/G/GForm';
import useStorage from '../../hooks/useStorage';
import {
  addInitialState,
  changeField,
  changeTextArea,
  deleteInitialState,
  getGData,
  getGH,
  gInitialize,
} from '../../redux/modules/g';
import getItemData from '../../components/common/getItemData';

const GContainer = () => {
  const dispatch = useDispatch();
  const gstate = useSelector(state => state.g);
  const {
    visible,
    showModal,
    commVisible,
    showCommModal,
    hideModal,
    setState,
  } = useStorage();

  const history = useHistory();

  const onRemove = useCallback(
    id => {
      dispatch(deleteInitialState(id));
    },
    [dispatch]
  );

  const onInsert = useCallback(() => {
    dispatch(addInitialState(Object.keys(gstate.D2).length));
  }, [dispatch, gstate]);

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
        gstate,
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
        getGH({
          RCVNO: JSON.parse(localStorage.getItem('rcvNo')),
          VESSELNM: JSON.parse(localStorage.getItem('shipNm')),
          CERTNO: JSON.parse(localStorage.getItem('certNo')) || null,
        })
      );
      const data = await getItemData(setState);

      if (!data) return;

      await dispatch(getGData(data));
    })();

    return () => {
      dispatch(gInitialize());
    };
  }, [dispatch, setState]);

  return (
    <>
      {visible && (
        <SaveModal
          form='G'
          path='save'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      {commVisible && (
        <CompleteModal
          form='G'
          path='complete'
          onStorage={onStorage}
          hideModal={hideModal}
        />
      )}
      <GForm
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

export default GContainer;
